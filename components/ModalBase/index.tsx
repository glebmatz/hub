import React, { RefObject, useCallback, useEffect, useRef } from "react";
import { View } from "react-native";
import { styles } from "./ModalBaseStyles";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { observer } from "mobx-react-lite";
import AppStore from "@app/store";
import { Easing } from "react-native-reanimated";

type BaseModalProps = {
  renderContent: (ref: RefObject<BottomSheet>) => React.ReactElement;
  snapPoints: number[];
  onClose?: () => void;
  name: string;
};

export const ModalBase: React.FC<BaseModalProps> = observer((props) => {
  const ref = useRef<BottomSheet>(null);

  useEffect(() => {
    AppStore.setModalsShown(props.name, true);
    setTimeout(() => {
      ref.current?.expand();
    }, 100);
  }, [ref]);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      AppStore.setModalsShown(props.name, false);
      props.onClose?.();
    }
  }, []);

  return (
    <View style={styles.wrapper}>
      <BottomSheet
        backdropComponent={(props) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} opacity={0.45} />}
        enablePanDownToClose
        index={0}
        onChange={handleSheetChanges}
        ref={ref}
        snapPoints={props.snapPoints}
        animationConfigs={{ duration: 250, easing: Easing.linear }}
        containerStyle={{ borderRadius: 20 }}
      >
        <View style={{ height: props.snapPoints[0] - 20 }}>{props.renderContent(ref)}</View>
      </BottomSheet>
    </View>
  );
});
