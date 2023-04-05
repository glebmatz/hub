import React, { forwardRef, useEffect, useState } from "react";
import { Platform, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { styles } from "./FloatingLabelStyles";

interface IFloatingLabelInput extends TextInputProps {
  label: string;
  subLabel?: string;
  onSubLabelPress?: () => void;
  password?: boolean;
  pressable?: boolean;
  onPress?: () => void;
}

export const FloatingLabelInput = forwardRef<TextInput, IFloatingLabelInput>((props, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const animation = useSharedValue(0);

  useEffect(() => {
    if (props.value) {
      animation.value = 1;
    }
  }, []);

  useEffect(() => {
    if (animation.value === 0 && isFocused) {
      animation.value = withTiming(1, { duration: 200 });
    }
    if (animation.value === 1 && !isFocused && !props.value) {
      animation.value = withTiming(0, { duration: 200 });
    }
  }, [isFocused]);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);

  const textStyle = useAnimatedStyle(() => {
    return {
      fontSize: 15 - animation.value * 2,
      top: (Platform.OS === "ios" ? 22 : 26) - animation.value * (Platform.OS === "ios" ? 22 : 26),
    };
  });

  const subTextStyle = useAnimatedStyle(() => {
    return {
      opacity: 1 - animation.value * 0.3,
    };
  });

  return (
    <View style={{ paddingTop: 18, width: "100%", position: "relative" }}>
      {props.pressable && <TouchableOpacity onPress={props.onPress} style={styles.pressableWrapper} />}
      <Animated.Text style={[styles.labelStyle, textStyle]}>{props.label}</Animated.Text>
      {props.subLabel && (
        <TouchableOpacity
          activeOpacity={1.0}
          hitSlop={{
            top: 8,
            bottom: 4,
            left: 8,
            right: 8,
          }}
          style={styles.subLabelWrapper}
          onPress={props.onSubLabelPress}
        >
          <Animated.Text style={[styles.subLabelStyle, subTextStyle, { color: "rgb(43, 150, 241)" }]}>{props.subLabel}</Animated.Text>
        </TouchableOpacity>
      )}
      <TextInput
        {...props}
        onFocus={(e) => {
          handleFocus();
          props.onFocus && props.onFocus(e);
        }}
        ref={ref}
        editable={!props.pressable}
        secureTextEntry={props.secureTextEntry || props.password}
        style={{
          height: Platform.OS === "ios" ? 35 : 40,
          fontSize: 15,
          lineHeight: 15,
          color: "#4B4B4B",
          borderBottomWidth: 1,
          borderBottomColor: isFocused ? "#2B96F1" : "#CECDCC",
          paddingRight: props.password ? 40 : 0,
        }}
        onBlur={(e) => {
          handleBlur();
          props.onBlur && props.onBlur(e);
        }}
        textAlignVertical={"center"}
        blurOnSubmit
        value={props.value}
        underlineColorAndroid="rgba(0,0,0,0)"
        autoCorrect={false}
      />
    </View>
  );
});
