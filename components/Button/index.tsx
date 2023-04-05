import React from "react";
import { ActivityIndicator, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ColorProps, createBox, ResponsiveValue, SpacingProps } from "@shopify/restyle";
import { Theme } from "@ui/theme/theme";
import { styles } from "./ButtonStyles";

const ButtonBaseComponent = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

const BackgroundMap = {
  normal: "buttonNormal",
  primary: "buttonPrimary",
  success: "buttonSuccess",
  error: "buttonError",
};

type ButtonProps = React.ComponentProps<typeof ButtonBaseComponent> &
  ColorProps<Theme> & {
    onPress?: () => void;
    loading?: boolean;
    icon?: React.ReactElement;
    iconPlacement?: "right" | "left";
    size?: "s" | "m" | "l";
    type?: "normal" | "primary" | "success" | "error";
    spacing?: SpacingProps<Theme>;
  };

export const ButtonBase: React.FC<ButtonProps> = ({ spacing, size, type, ...props }) => {
  // eslint-disable-next-line no-nested-ternary
  const radius = size ? (size === "s" || size === "m" ? 5 : 20) : 5;
  const background = (type ? BackgroundMap[type] : "buttonNormal") as ResponsiveValue<
    "buttonNormal" | "buttonPrimary" | "buttonSuccess" | "buttonError",
    Theme
  >;
  return (
    <ButtonBaseComponent backgroundColor={background} onPress={props.onPress} style={styles.button} {...spacing} borderRadius={radius}>
      {!props.loading && props.icon && props.iconPlacement === "left" && props.icon}
      {props.loading ? <ActivityIndicator size="large" /> : props.children}
      {!props.loading && props.icon && props.iconPlacement === "right" && props.icon}
    </ButtonBaseComponent>
  );
};
