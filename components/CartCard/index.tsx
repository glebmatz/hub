import { Minus, Plus, Trash } from "@ui/icons";
import React from "react";
import { Image, Pressable, TouchableOpacity } from "react-native";
import Box from "../Box";
import Text from "../Text";
import { styles } from "./CartCardStyles";

interface ICartCardProps {
  image?: string | null;
  social: number;
  title: string;
  task: string;
  price: number;
  count: number;
  pricePerCompletion: number;
  onIncreaseCount?: () => void;
  onDecreaseCount?: () => void;
  onRemove?: () => void;
  onPress?: () => void;
  loading?: boolean;
}

export const CartCard: React.FC<ICartCardProps> = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Box
        padding="ll"
        backgroundColor="white"
        borderRadius={12}
        borderWidth={1}
        borderColor="delimiterColor"
        marginBottom="ll"
        height={140}
      >
        <Box>
          <Box height="80%">
            <Box flexDirection="row" alignItems="flex-start" justifyContent="space-between">
              <Box flexDirection="row" flex={1}>
                {props.image && <Image source={{ uri: props.image }} style={styles.image} resizeMode="contain" />}
                <Box flex={1}>
                  <Text variant="PMedium" numberOfLines={1} marginLeft={props.image ? "m" : "none"}>
                    {props.title}
                  </Text>
                  <Text variant="caption1" color="cartCaption" numberOfLines={2} marginLeft={props.image ? "m" : "none"}>
                    {props.task}
                  </Text>
                </Box>
              </Box>
              <Text variant="PRegular" textAlign="right" color="textSuccess">
                {props.price.toFixed(2)} ₽
              </Text>
            </Box>
          </Box>
          <Box>
            <Box flexDirection="row" alignItems="center" justifyContent="space-between">
              <Box flexDirection="row" alignItems="center">
                <TouchableOpacity
                  hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                  style={styles.countButton}
                  onPress={props.onDecreaseCount}
                >
                  <Minus />
                </TouchableOpacity>
                <Text variant="regular" marginHorizontal="m">
                  {props.count}
                </Text>
                <TouchableOpacity
                  hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                  style={styles.countButton}
                  onPress={props.onIncreaseCount}
                >
                  <Plus />
                </TouchableOpacity>
                <Text variant="caption1" color="textSecondary" marginLeft="m" numberOfLines={1}>
                  {props.pricePerCompletion} ₽ за 1 вып.
                </Text>
              </Box>
              <Box alignItems="flex-end" flexDirection="column" justifyContent="space-between">
                <TouchableOpacity hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }} onPress={props.onRemove}>
                  <Trash />
                </TouchableOpacity>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};
