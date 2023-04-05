import React, { forwardRef } from "react";
import { TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from "react-native";
import { Theme } from "@ui/theme/theme";
import { SpacingProps, useTheme } from "@shopify/restyle";
import { styles } from "./BaseInputStyle";
import Box from "../Box";

interface IBaseInput extends TextInputProps {
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  iconMargin?: SpacingProps<Theme>;
  wrapperStyles?: ViewStyle;
  pressable?: boolean;
  onPress?: () => void;
}

export const BaseInput = forwardRef<TextInput, IBaseInput>((props, ref) => {
  const theme = useTheme<Theme>();

  return (
    <View style={[styles.wrapper, props.wrapperStyles]}>
      {props.pressable && <TouchableOpacity style={styles.pressableArea} onPress={props.onPress} />}
      {props.iconLeft && (
        <Box width={30} alignItems="center" justifyContent="center" {...props.iconMargin}>
          {props.iconLeft}
        </Box>
      )}
      <TextInput ref={ref} style={styles.input} placeholderTextColor={theme.colors.textLabel} {...props} />
      {props.iconRight && (
        <Box width={30} alignItems="center" justifyContent="center" {...props.iconMargin}>
          {props.iconRight}
        </Box>
      )}
    </View>
  );
});
