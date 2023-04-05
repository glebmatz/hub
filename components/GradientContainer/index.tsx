import React from "react";
import { View, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "./GradientContainerStyles";

interface IGradientContanerProps {
  startColor: string;
  endColor: string;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: ViewStyle;
}

export const GradientContainer: React.FC<IGradientContanerProps> = (props) => {
  return (
    <View style={[styles.flex, props.style]}>
      <LinearGradient start={props.start} end={props.end} colors={[props.startColor, props.endColor]} style={[styles.flex]}>
        {props.children}
      </LinearGradient>
    </View>
  );
};
