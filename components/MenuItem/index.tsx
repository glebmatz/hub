import React from "react";
import { ColorProps, createBox } from "@shopify/restyle";
import { Theme } from "@ui/theme/theme";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Box from "../Box";
import Text from "../Text";
import { MenuArrowRight } from "@ui/icons";

const MenuItemBase = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

type MenuItemProps = React.ComponentProps<typeof MenuItemBase> &
  ColorProps<Theme> & {
    onPress?: () => void;
    label: string;
    icon?: React.ReactElement;
  };

export const MenuItem: React.FC<MenuItemProps> = ({ onPress, label, icon }) => {
  return (
    <MenuItemBase onPress={onPress} flexDirection="row" alignItems="center" width="100%">
      {icon && (
        <Box marginRight="ll" width={22} alignItems="center">
          {icon}
        </Box>
      )}
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        paddingVertical="ll"
        borderBottomWidth={1}
        borderBottomColor="delimiterColor"
        flex={1}
      >
        <Text variant="regularMedium">{label}</Text>
        <MenuArrowRight />
      </Box>
    </MenuItemBase>
  );
};
