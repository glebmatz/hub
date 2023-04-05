import React, { FC } from "react";
import { ActivityIndicator } from "react-native";
import Box from "../Box";
import { ButtonBase } from "../Button";
import Text from "../Text";

interface IOrderTotal {
  sum: number;
  onPress?: () => void;
  noBorder?: boolean;
  loading?: boolean;
}

export const OrderTotal: FC<IOrderTotal> = ({ sum, onPress, noBorder, loading }) => (
  <Box
    backgroundColor="white"
    paddingHorizontal="ll"
    paddingVertical="xl"
    borderTopWidth={noBorder ? 0 : 1}
    borderTopColor="delimiterColor"
    flexDirection="row"
    alignItems="center"
  >
    <Box marginRight="l">
      <Text variant="caption2" marginBottom="s">
        Сумма заказа
      </Text>
      <Text variant="h3" color="textSuccess" marginBottom="s">
        {sum.toFixed(2)}₽
      </Text>
    </Box>
    <ButtonBase type="success" size="m" onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <Text variant="buttonL" color="white">
          Оформить заказ
        </Text>
      )}
    </ButtonBase>
  </Box>
);
