import React, { useMemo } from "react";
import { Theme } from "@ui/theme/theme";
import { ColorProps, createBox } from "@shopify/restyle";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Text from "../Text";
import { splitMoney } from "@ui/utils/splitMoney";

const BalanceButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

type BalanceButtonProps = React.ComponentProps<typeof BalanceButton> &
  ColorProps<Theme> & {
    onPress?: () => void;
    money: number;
    size?: "small" | "large";
  };

export const Balance: React.FC<BalanceButtonProps> = ({ onPress, money, size }) => {
  const [rub, cop] = useMemo(() => (money ? splitMoney(money) : ["0", "00"]), [money]);

  return (
    <BalanceButton
      hitSlop={{ top: 16, bottom: 16, right: 16, left: 16 }}
      onPress={onPress}
      flexDirection="row"
      justifyContent="flex-end"
      alignItems="flex-end"
    >
      <Text variant={size === "small" ? "balanceBig" : "balanceLargeBig"}>{rub}</Text>
      <Text variant={size === "small" ? "balanceSmall" : "balanceLargeSmall"}>.{cop}₽</Text>
    </BalanceButton>
  );
};
