import React from "react";
import { ColorProps, createBox } from "@shopify/restyle";
import { Theme } from "@ui/theme/theme";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Text from "../Text";

const RoundButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

type RoundButtonProps = React.ComponentProps<typeof RoundButton> &
  ColorProps<Theme> & {
    onPress?: () => void;
    isActive: boolean;
    label: string;
  };

export const RoundTab: React.FC<RoundButtonProps> = (props) => {
  return (
    <RoundButton
      borderRadius={6}
      paddingVertical="m"
      paddingHorizontal="l"
      flexDirection="row"
      alignItems="center"
      onPress={props.onPress}
      backgroundColor={props.isActive ? "buttonPrimary" : "shadowColor"}
    >
      <Text variant={props.isActive ? "buttonSLight" : "buttonSInactive"}>{props.label}</Text>
    </RoundButton>
  );
};
