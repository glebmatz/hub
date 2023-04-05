import React, { forwardRef, ReactElement } from "react";
import { TextInput, TextInputProps, TouchableOpacity } from "react-native";
import Box from "../Box";
import Text from "../Text";
import { styles } from "./IconInputStyles";

interface IIconInputProps extends TextInputProps {
  icon?: ReactElement;
  iconRight?: ReactElement;
  label?: string;
  pressable?: boolean;
  onPress?: () => void;
}

export const IconInput = forwardRef<TextInput, IIconInputProps>((props, ref) => {
  return (
    <>
      {props.label && (
        <Box marginBottom="m">
          <Text variant="caption2">{props.label}</Text>
        </Box>
      )}
      <Box flexDirection="row" position="relative">
        {props.pressable && <TouchableOpacity style={styles.pressableArea} onPress={props.onPress} />}
        {props.icon && (
          <Box position="absolute" left={8} top={7}>
            {props.icon}
          </Box>
        )}
        {props.iconRight && (
          <Box position="absolute" right={8} top={7}>
            {props.iconRight}
          </Box>
        )}
        <TextInput
          {...props}
          ref={ref}
          style={[styles.input, !props.icon && { paddingLeft: 4 }]}
          textAlignVertical={"center"}
          blurOnSubmit
          clearButtonMode="always"
          underlineColorAndroid="rgba(0,0,0,0)"
          autoCorrect={false}
        />
      </Box>
    </>
  );
});
