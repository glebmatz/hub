import Box from "@ui/components/Box";
import { CartCard } from "@ui/components/CartCard";
import { Header } from "@ui/components/Header";
import React, { useState } from "react";
import { Dimensions, FlatList, RefreshControl, SafeAreaView } from "react-native";
import { observer } from "mobx-react-lite";
import CartStore from "../../modules/cart/store";
import { ModalBase } from "@ui/components/ModalBase";
import { RemoveCartItemModal } from "@modals/RemoveCartItem";
import { useDebouncedCallback } from "@core/utils/useDebouncedCallback";
import { OrderPay } from "@modals/OrderPay";
import { OrderTotal } from "@ui/components/OrderTotal";
import { PaymentTypeModal } from "@modals/PaymentType";
import { TTopupVariant } from "modules/balance/store";
import OrderStore from "../../modules/order/store";
import { TopupRow } from "@ui/components/TopupRow";
import { BalancePaymentIcon } from "@ui/icons/PaymentSystems";
import UserStore from "../../modules/user/store";
import ServicesStore from "../../modules/services/store";
import Text from "@ui/components/Text";
import { styles } from "./CartStyles";
import { SuccessModal } from "@modals/Success";
import { ServiceModal } from "@modals/Service";
import { ICartItem } from "@api/apiTypes";
import { WebviewModal } from "@modals/WebView";

const { height } = Dimensions.get("window");

export const CartScreen: React.FC = observer(() => {
  const account = UserStore.accounts && UserStore.accounts.length > 0 ? UserStore.accounts[0] : { balance: "0.0000" };
  const [refreshing, setRefreshing] = useState(false);
  const [removeModalVisible, setRemoveModalVisible] = useState(false);
  const [orderPayModalVisible, setOrderPayModalVisible] = useState(false);
  const [paymentTypeModalVisible, setPaymentTypeModalVisible] = useState(false);
  const [webviewModalVisible, setWebviewModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [successModalSucess, setSuccessModalSucess] = useState(true);
  const [webviewLink, setWebviewLink] = useState("");
  const [serviceModalVisible, setServiceModalVisible] = useState(false);
  const [selectedCartItem, setSelectedCartItem] = useState<string | null>(null);
  const sync = useDebouncedCallback((id: string) => syncCartWithAPI(id), 2000);

  const onRefresh = () => {
    setRefreshing(true);
    CartStore.getCart().then(() => {
      setRefreshing(false);
    });
  };

  const syncCartWithAPI = (id: string) => {
    setRefreshing(true);
    CartStore.updateItem(id).then(() => {
      CartStore.getCart().then(() => {
        setRefreshing(false);
      });
    });
  };

  const onItemRemove = () => {
    if (!selectedCartItem) {
      return;
    }
    setRemoveModalVisible(false);
    setRefreshing(true);
    CartStore.removeItem(selectedCartItem).then(() => {
      CartStore.getCart().then(() => {
        setRefreshing(false);
      });
    });
  };

  const onIncreaseItemCount = (id: string) => {
    CartStore.changeItemCount(id, "increase");
    sync(id);
  };

  const onDecreaseItemCount = (id: string) => {
    CartStore.changeItemCount(id, "decrease");
    sync(id);
  };

  const renderRemoveModal = () => {
    return <RemoveCartItemModal onClose={onRemoveModalClose} onRemove={onItemRemove} />;
  };

  const renderOrderPayModal = () => {
    return (
      <OrderPay
        openSuccess={() => setSuccessModalVisible(true)}
        closeModal={onOrderPayModalClose}
        openPaymentType={() => setPaymentTypeModalVisible(true)}
        openWebview={openWebview}
      />
    );
  };

  const openWebview = (link: string) => {
    setWebviewLink(link);
    setWebviewModalVisible(true);
  };

  const renderWebviewModal = () => {
    return <WebviewModal onMessage={onWebviewMessage} source={{ uri: webviewLink }} closeModal={onWebviewModalClose} />;
  };

  const renderSuccessModal = () => {
    return (
      <SuccessModal
        title={successModalSucess ? "Заказ успешно оформлен" : "Ошибка создания заказа"}
        description={
          successModalSucess
            ? "Статус заказа и процесс выполнения отображается на экране “Мои заказы”."
            : "Произошла ошибка при создании заказа. Попробуйте еще раз."
        }
        mainActionText={successModalSucess ? "Отлично" : "Попробовать еще раз"}
        onMainAction={onSuccessModalClose}
        error={!successModalSucess}
      />
    );
  };

  const onWebviewMessage = (event: any) => {
    const { data } = event.nativeEvent;
    onWebviewModalClose();
    if (data && data === "success-payment") {
      setSuccessModalSucess(true);
      onOrderPayModalClose();
      setSuccessModalVisible(true);
      CartStore.getCart();
      UserStore.fetchAccount();
      UserStore.fetchMyAccounts();
    } else {
      setSuccessModalSucess(false);
      setSuccessModalVisible(true);
    }
  };

  const onRemoveModalClose = () => {
    setTimeout(() => {
      setRemoveModalVisible(false);
      setSelectedCartItem(null);
    }, 100);
  };

  const renderPaymentTypeModal = () => {
    return (
      <PaymentTypeModal
        additionalVariant={
          UserStore.isAuth ? (
            <TopupRow
              right={
                <Box style={styles.balance}>
                  <Text variant="caption3">{(+account.balance).toFixed(2)}₽</Text>
                </Box>
              }
              icon={<BalancePaymentIcon />}
              title="Баланс"
              commission="0"
            />
          ) : undefined
        }
        defaultSelectedVariant={OrderStore.selectedTopupVariant || undefined}
        onVariantSelect={onPaymentVariantSelect}
        closeModal={onPaymentTypeModalClose}
      />
    );
  };

  const onPaymentVariantSelect = (selected: TTopupVariant | null) => {
    OrderStore.setTopupVariant(selected);
  };

  const onPaymentTypeModalClose = () => {
    setTimeout(() => {
      setPaymentTypeModalVisible(false);
    }, 100);
  };

  const onOrderPayModalClose = () => {
    setTimeout(() => {
      OrderStore.setTopupVariant(null);
      setOrderPayModalVisible(false);
    }, 100);
  };

  const onSuccessModalClose = () => {
    setTimeout(() => {
      setSuccessModalVisible(false);
    }, 100);
  };

  const renderServiceModal = () => {
    return <ServiceModal item={CartStore.selectedItem || undefined} hideButton />;
  };

  const onServiceModalClose = () => {
    setTimeout(() => {
      setServiceModalVisible(false);
      ServicesStore.setSelectedServices(null);
      ServicesStore.setModalActiveTab(0);
      OrderStore.resetComments();
      OrderStore.setVote(0);
    }, 100);
  };

  const onWebviewModalClose = () => {
    setTimeout(() => {
      setWebviewModalVisible(false);
    }, 100);
  };

  const onCardPress = (service: ICartItem) => {
    const foundItem = ServicesStore.defaultServices.find((item) => item.id === service.service_option_id);
    if (foundItem) {
      CartStore.setSelectedItem(service);
      ServicesStore.setSelectedServices(foundItem);
      setServiceModalVisible(true);
    }
  };

  return (
    <Box flex={1} backgroundColor="backgroundDark">
      {orderPayModalVisible && (
        <ModalBase name={"topupModal"} onClose={onOrderPayModalClose} snapPoints={[400]} renderContent={renderOrderPayModal} />
      )}
      {removeModalVisible && (
        <ModalBase name={"removeCartItemModal"} onClose={onRemoveModalClose} snapPoints={[200]} renderContent={renderRemoveModal} />
      )}
      {paymentTypeModalVisible && (
        <ModalBase name={"paymentTypeModal"} onClose={onPaymentTypeModalClose} snapPoints={[400]} renderContent={renderPaymentTypeModal} />
      )}
      {successModalVisible && (
        <ModalBase name={"successModal"} onClose={onSuccessModalClose} snapPoints={[350]} renderContent={renderSuccessModal} />
      )}
      {serviceModalVisible && (
        <ModalBase name={"serviceModal"} onClose={onServiceModalClose} snapPoints={[height - 100]} renderContent={renderServiceModal} />
      )}
      {webviewModalVisible && (
        <ModalBase name={"webviewModal"} onClose={onWebviewModalClose} snapPoints={[height - 100]} renderContent={renderWebviewModal} />
      )}
      <SafeAreaView>
        <Box>
          <Box marginBottom="l">
            <Header label="Корзина" subLabel={`${CartStore.cartInfo?.total.count || 0} задания в корзине`} hideLogo withBack />
          </Box>
        </Box>
      </SafeAreaView>
      <Box flex={1} paddingHorizontal="ll" marginTop="l">
        <FlatList
          data={CartStore.cartInfo?.items || []}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          renderItem={({ item }) => (
            <CartCard
              image={item.link_img}
              title={item.metadata && item.metadata.name ? item.metadata.name : item.service_name}
              task={item.service_option_name}
              social={item.platform_id}
              price={item.quantity * +item.cost_per_one}
              count={item.quantity}
              pricePerCompletion={+item.cost_per_one}
              onRemove={() => {
                setSelectedCartItem(item.cart_item_id);
                setRemoveModalVisible(true);
              }}
              onIncreaseCount={() => onIncreaseItemCount(item.cart_item_id)}
              onDecreaseCount={() => onDecreaseItemCount(item.cart_item_id)}
              onPress={() => onCardPress(item)}
            />
          )}
        />
      </Box>
      {CartStore.cartInfo?.items.length ? (
        <OrderTotal sum={CartStore.cartInfo.total.cost} onPress={() => setOrderPayModalVisible(true)} />
      ) : null}
    </Box>
  );
});
