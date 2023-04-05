import React from "react";
import { CartIcon } from "@ui/icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ColorProps, createBox } from "@shopify/restyle";
import { Theme } from "@ui/theme/theme";
import Text from "../Text";

const IconButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

type CartButtonProps = React.ComponentProps<typeof IconButton> &
  ColorProps<Theme> & {
    onPress?: () => void;
    count?: number;
  };

export const CartButton: React.FC<CartButtonProps> = ({ onPress, count }) => {
  return (
    <IconButton hitSlop={{ top: 16, left: 16, right: 16, bottom: 16 }} flexDirection="row" alignItems="center" onPress={onPress}>
      <CartIcon />
      {count ? (
        <Text variant="headlineSemibold" marginLeft="s">
          {count}
        </Text>
      ) : null}
    </IconButton>
  );
};
