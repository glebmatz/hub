import { IMyOrder } from "@api/apiTypes";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import Box from "../Box";
import Text from "../Text";
import { styles } from "./OrderCardStyles";
import dayjs from "dayjs";
import { Blocked, Refresh, UsersCrownDark } from "@ui/icons";
import * as Progress from "react-native-progress";
import { palette } from "@ui/theme/theme";

// Statuses 2 - в процессе, 3 - выполнено, 5 - не выполнен, 1 - ожидает, 6 - отменен, 4 - частично выполнен

interface IOrderCard {
  onPress?: () => void;
  item: IMyOrder;
  iconColor?: string;
  noBorder?: boolean;
}

export const OrderCard = React.memo<IOrderCard>(({ item, onPress, noBorder }) => {
  const renderStatus = () => {
    if (item.status === 2 || item.status === 3 || item.status === 4 || item.status === 5) {
      return (
        <>
          <Box style={[styles.circle, item.progress_percent === 100 && { borderColor: palette.success }]}>
            <Progress.Pie
              size={10}
              progress={item.progress_percent / 100}
              color={item.progress_percent === 100 ? palette.success : palette.action2}
              animated={false}
              borderWidth={0}
            />
          </Box>
          <Text variant="regularMedium" marginLeft="s">
            {item.progress_percent}%
          </Text>
        </>
      );
    }
    if (item.status === 1) {
      return (
        <>
          <Refresh />
          <Text variant="regularMedium" marginLeft="s">
            В очереди
          </Text>
        </>
      );
    }

    return (
      <>
        <Blocked />
        <Text variant="regularMedium" marginLeft="s">
          Заблокировно
        </Text>
      </>
    );
  };

  return (
    <TouchableOpacity onPress={onPress} style={[styles.wrapper, noBorder && { borderWidth: 0 }]}>
      <Box flexDirection="row" justifyContent="space-between">
        <Box flex={1}>
          <Box flexDirection="row" alignItems="center" marginBottom="s">
            <Text variant="caption1" color="cardSubitile" numberOfLines={2}>
              {item.resale_service_option_title}
            </Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <Text variant="headlineMedium" numberOfLines={2}>
              {item.metadata && item.metadata.name ? item.metadata.name : item.link}
            </Text>
          </Box>
          <Box flexDirection="row" alignItems="center" marginTop="s">
            <Text variant="caption2">{dayjs(item.created_at).format("DD.MM.YYYY hh:mm")}</Text>
            <Box width={3} height={3} marginHorizontal="s" borderRadius={3} backgroundColor="textSecondary" />
            <Text variant="caption2">#{item.id}</Text>
          </Box>
        </Box>
        {item.metadata && item.metadata.img && (
          <Box paddingTop="s" marginLeft="l">
            <Image source={{ uri: item.metadata?.img || "" }} resizeMode="contain" style={styles.iconWrapper} />
          </Box>
        )}
      </Box>
      <Box flexDirection="row" alignItems="center" justifyContent="space-between" marginTop="l">
        <Box flexDirection="row" alignItems="center">
          <Box flexDirection="row" alignItems="center">
            <UsersCrownDark />
            <Text variant="regularMedium" marginLeft="s">
              {item.required_amount}
            </Text>
          </Box>
          <Box flexDirection="row" alignItems="center" marginLeft="ll">
            {renderStatus()}
          </Box>
        </Box>
        <Box>
          <Text variant="headlineSemibold" color="textSuccess" textAlign="right">
            {(+item.in_charge).toFixed(2)} ₽
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
});
