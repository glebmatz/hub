import Box from "@ui/components/Box";
import { Header } from "@ui/components/Header";
import { RoundTab } from "@ui/components/RoundTab";
import { Tabbar } from "@ui/components/Tabbar";
import { Tab } from "@ui/components/Tabbar/Tab";
import Text from "@ui/components/Text";
import { observer } from "mobx-react-lite";
import React, { useMemo, useState } from "react";
import { Dimensions, FlatList, SafeAreaView, ScrollView } from "react-native";
import { styles } from "./ServicesStyles";
import ServicesStore, { TSocialTab, TSocialType } from "@services/store";
import { IAPIService, IAPIServiceOption } from "@api/apiTypes";
import { ServiceCard } from "@ui/components/ServiceCard";
import interpolate from "color-interpolate";
import { palette } from "@ui/theme/theme";
import { ModalBase } from "@ui/components/ModalBase";
import { ServiceModal } from "@modals/Service";
import { ServiceFilters } from "@modals/ServiceFilters";

const colormap = interpolate([palette.gradient100, palette.gradient80, palette.gradient60, palette.gradient40]);
const { height } = Dimensions.get("window");

export const ServicesScreen: React.FC = observer(() => {
  const [serviceModalVisible, setServiceModalVisible] = useState(false);
  const [filtersVisible, setFiltersVisible] = useState(false);

  const renderTab = ({ item }: { item: IAPIServiceOption }) => {
    if (item.platform_id >= 0) {
      return (
        <Tab
          onPress={() => changeSocial(item.platform_id)}
          type={item.platform_id}
          isActive={ServicesStore.activeSocial === item.platform_id}
          label={item.platform_name}
        />
      );
    }

    return <Tab onPress={() => setFiltersVisible(true)} type={item.platform_id} isActive={false} label={item.platform_name} />;
  };

  const changeSocial = (social: number) => {
    ServicesStore.setActiveSocial(social as TSocialTab);
    ServicesStore.setActiveType(0);
  };

  const changeType = (type: TSocialType) => {
    ServicesStore.setActiveType(type);
  };

  const titleSubject = useMemo(() => {
    const item = ServicesStore.availableTypes?.find((type) => type.id === ServicesStore.activeType);
    if (item?.id === 0) {
      return "";
    }
    return item?.name.toLowerCase();
  }, [ServicesStore.activeType]);

  const titleObject = useMemo(() => {
    const item = ServicesStore.serviceOptions?.find((type) => type.platform_id === ServicesStore.activeSocial);
    return item?.platform_name;
  }, [ServicesStore.activeSocial]);

  const renderServiceModal = () => {
    return <ServiceModal />;
  };

  const onServiceModalClose = () => {
    setTimeout(() => {
      setServiceModalVisible(false);
      ServicesStore.setSelectedServices(null);
    }, 100);
  };

  const onCardPress = (service: IAPIService) => {
    ServicesStore.setSelectedServices(service);
    setServiceModalVisible(true);
  };

  const renderFilters = () => {
    return <ServiceFilters />;
  };

  const onFiltersClose = () => {
    setTimeout(() => {
      setFiltersVisible(false);
    }, 100);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      {filtersVisible && (
        <ModalBase name={"servicesFiltersModal"} onClose={onFiltersClose} snapPoints={[500]} renderContent={renderFilters} />
      )}
      {serviceModalVisible && (
        <ModalBase name={"serviceModal"} onClose={onServiceModalClose} snapPoints={[height - 100]} renderContent={renderServiceModal} />
      )}
      <Box flex={1} backgroundColor="white">
        <Box>
          <Box marginBottom="l">
            <Header hideLogo />
          </Box>
          <Box paddingHorizontal="l" marginBottom="m">
            <Text variant="h0">Услуги и цены</Text>
          </Box>
          <Box marginTop="s">
            <Tabbar
              items={[
                {
                  platform_call_name: "all",
                  platform_id: 0,
                  platform_name: "Все",
                  types: [],
                },
                ...ServicesStore.serviceOptions,
              ]}
              renderItem={renderTab}
            />
          </Box>
        </Box>
        <Box flex={1} backgroundColor="backgroundDark" paddingTop={ServicesStore.availableTypes ? "l" : "none"}>
          {ServicesStore.availableTypes && (
            <Box marginBottom="m">
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
                {ServicesStore.availableTypes.map((type, index) => (
                  <Box marginRight={index < ServicesStore.availableTypes!.length - 1 ? "m" : "none"}>
                    <RoundTab
                      onPress={() => changeType(type.id as TSocialType)}
                      isActive={type.id === ServicesStore.activeType}
                      label={type.name}
                    />
                  </Box>
                ))}
              </ScrollView>
            </Box>
          )}
          <Box paddingHorizontal="l">
            <Text variant="h3">
              {titleObject} {titleSubject}
            </Text>
          </Box>
          <Box flex={1} marginTop="l">
            <FlatList
              data={ServicesStore.currentServices}
              contentContainerStyle={styles.cardsWrapper}
              initialNumToRender={5}
              renderItem={({ item, index }) => (
                <ServiceCard
                  item={item}
                  iconColor={colormap((index + 1) / ServicesStore.currentServices.length)}
                  onPress={() => onCardPress(item)}
                />
              )}
            />
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
});
