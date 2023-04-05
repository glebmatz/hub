import { IAPIService } from "@api/apiTypes";
import { RatingStar, SpeedIcon, UsersCrown } from "@ui/icons";
import { palette } from "@ui/theme/theme";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import Box from "../Box";
import Text from "../Text";
import { styles } from "./ServiceCardStyles";
import { shortifyNumber } from "@ui/utils/shortifyNumber";
import { CancelUsersIcon, RefreshIcon, TimerIcon } from "@ui/icons/ServiceCard";

interface IServiceCard {
  onPress?: () => void;
  item: IAPIService;
  iconColor?: string;
  noBorder?: boolean;
  collapsed?: boolean;
}

export const ServiceCard = React.memo<IServiceCard>(({ item, onPress, iconColor, noBorder, collapsed }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, noBorder && { borderWidth: 0 }, collapsed && { paddingVertical: 8, marginBottom: 4 }]}
    >
      <Box flexDirection="row" alignItems="flex-start" justifyContent="space-between">
        <Box width={collapsed ? "100%" : "85%"}>
          <Box>
            <Text variant="headlineMedium" numberOfLines={collapsed ? 1 : 2} color="cardTitle">
              {item.title}
            </Text>
          </Box>
          {!collapsed && (
            <Box marginTop="m" flexDirection="row" alignItems="center">
              <Box flexDirection="row">
                <Text variant="primary1" color="textSecondary">
                  Мин/Макс:{" "}
                </Text>
                <Text variant="primary1">
                  {item.min}/{shortifyNumber(item.max)}
                </Text>
              </Box>
              <Box marginLeft="l" flexDirection="row" alignItems="center">
                <RatingStar state="full" />
                <Text variant="primary1" marginLeft="s">
                  {item.quality / 2}/5
                </Text>
              </Box>
            </Box>
          )}
        </Box>
        <Box>
          {!collapsed && (
            <View style={[styles.iconWrapper, { backgroundColor: iconColor || palette.gradient100 }]}>
              <UsersCrown />
            </View>
          )}
        </Box>
      </Box>
      {!collapsed && <Box marginVertical="l" style={styles.delimiter} />}
      {!collapsed && (
        <Box flexDirection="row" alignItems="center" justifyContent="space-between">
          <Box flexDirection="row">
            {/* <Box width={100}>
              <Box flexDirection="row" alignItems="center">
                <CancelUsersIcon />
                <Text variant="caption2" marginLeft="s">
                  {item.criteria.find((el) => el.name === "Процент отписок")?.value}
                </Text>
              </Box>
              <Box marginTop="m" flexDirection="row" alignItems="center">
                <RefreshIcon />
                <Text variant="caption2" marginLeft="s">
                  {item.criteria.find((el) => el.name === "Процент отписок")?.value}
                </Text>
              </Box>
            </Box> */}
            <Box width={100}>
              <Box flexDirection="row" alignItems="center">
                <SpeedIcon speed={item.speed} />
                <Text variant="caption2" marginLeft="s">
                  {item.maxi_per_day} в день
                </Text>
              </Box>
              <Box marginTop="m" flexDirection="row" alignItems="center">
                <TimerIcon />
                <Text variant="caption2" marginLeft="s">
                  {item.start_timeout_minutes} мин
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Text variant="headlineSemibold" color="textSuccess" textAlign="right">
              {+item.cost * 1000} ₽
            </Text>
            <Text variant="caption2" textAlign="right" marginTop="s">
              за 1000 вып
            </Text>
          </Box>
        </Box>
      )}
      {/*<Box width="85%">*/}
      {/*  <Box flexDirection="row" alignItems="center" marginBottom="ll">*/}
      {/*    <Text variant="regularMedium" color="textSecondary">*/}
      {/*      ID-{item.id}*/}
      {/*    </Text>*/}
      {/*    <Box width={3} height={3} marginHorizontal="s" borderRadius={3} backgroundColor="textSecondary" />*/}
      {/*    <Text variant="regularMedium" color="textSecondary">*/}
      {/*      {item.platform_name}*/}
      {/*    </Text>*/}
      {/*  </Box>*/}
      {/*  <Box flexDirection="row" alignItems="center">*/}
      {/*    <Box flexDirection="row" alignItems="center">*/}
      {/*      <Box marginRight="s">*/}
      {/*        <SpeedIcon speed={item.speed} />*/}
      {/*      </Box>*/}
      {/*      <Text variant="regularMedium" color="textRegular">*/}
      {/*        {item.maxi_per_day}/день*/}
      {/*      </Text>*/}
      {/*    </Box>*/}
      {/*  </Box>*/}
      {/*</Box>*/}
      {/*<Box flexDirection="column" justifyContent="space-between">*/}
      {/*  <Box>*/}
      {/*    <Text variant="headlineSemibold" color="textSuccess" textAlign="right">*/}
      {/*      {+item.cost * 1000} ₽*/}
      {/*    </Text>*/}
      {/*  </Box>*/}
      {/*</Box>*/}
    </TouchableOpacity>
  );
});
