import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import { Balance } from "../Balance";
import Box from "../Box";
import { CartButton } from "../CartButton";
import { LogoHeader } from "@ui/icons/Logo";
import { observer } from "mobx-react-lite";
import UserStore from "@user/store";
import CartStore from "../../../cart/store";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { BackIcon } from "@ui/icons";
import Text from "../Text";
import { Paths } from "@core/navigation/paths";
import { TStack } from "@core/navigation/RootNavigation";

type HeaderProps = {
  hideLogo?: boolean;
  withBack?: boolean;
  label?: string;
  hideBalance?: boolean;
  subLabel?: string;
};

const accountBase = {
  balance: "0.0000",
  currency_code: "RUB",
  limit: "0.0000",
  number: "100020000000748",
  status: 1,
  type: 100,
  type_title: "Основной счет",
};

export const Header: React.FC<HeaderProps> = observer(({ hideLogo, withBack, label, hideBalance, subLabel }) => {
  const navigation = useNavigation<NavigationProp<TStack>>();
  const account = UserStore.accounts && UserStore.accounts.length > 0 ? UserStore.accounts[0] : accountBase;
  const cart = CartStore.cartInfo;

  return (
    <SafeAreaView>
      <Box paddingTop="l" paddingHorizontal="l" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box width={50}>
          {withBack ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
          ) : (
            <CartButton count={cart?.total.count} onPress={() => navigation.navigate(Paths.Cart)} />
          )}
        </Box>
        {!hideLogo && <LogoHeader />}
        {label && (
          <Box flex={1}>
            <Text variant="h3" textAlign="center">
              {label}
            </Text>
            {subLabel && (
              <Text variant="caption1" textAlign="center">
                {subLabel}
              </Text>
            )}
          </Box>
        )}
        <Box width={50}>{!hideBalance && UserStore.isAuth && <Balance money={+account.balance} size="small" />}</Box>
      </Box>
    </SafeAreaView>
  );
});
