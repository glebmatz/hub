import React from "react";
import { ColorProps, createBox } from "@shopify/restyle";
import { Theme } from "@ui/theme/theme";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Text from "../Text";
import Box from "../Box";

const CategoryCardButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

type CategoryCardButtonProps = React.ComponentProps<typeof CategoryCardButton> &
  ColorProps<Theme> & {
    onPress?: () => void;
    icon: React.ReactElement;
    label: string;
  };

export const CategoryCard: React.FC<CategoryCardButtonProps> = ({ onPress, icon, label }) => {
  return (
    <CategoryCardButton onPress={onPress} width={88} height={75} justifyContent="space-between" alignItems="center">
      <Box height={35} justifyContent="center" alignItems="center" marginBottom="l">
        {icon}
      </Box>
      <Box justifyContent={"flex-start"} flex={1}>
        <Text variant="caption1" textAlign="center" lineHeight={12} fontSize={10}>
          {label}
        </Text>
      </Box>
    </CategoryCardButton>
  );
};
