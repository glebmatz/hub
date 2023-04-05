import React, { FC } from "react";
import { Image, Pressable, View } from "react-native";
import Box from "../Box";
import Text from "../Text";
import { styles } from "./AccountPostsStyles";

interface IAccountPost {
  image: string;
  isActive: boolean;
  size: number;
  number?: number;
  onPress: () => void;
}

export const AccountPost: FC<IAccountPost> = ({ image, isActive, size, number, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.postWrapper, { width: size, height: size }]}>
      <View style={styles.outerCircle}>
        {isActive && (
          <View style={styles.innerCircle}>
            <Text variant="PMedium" color="white">
              {number || 1}
            </Text>
          </View>
        )}
      </View>
      {isActive && (
        <View
          style={[
            styles.postOuter,
            {
              width: size,
              height: size,
            },
          ]}
        />
      )}
      <Box position="relative">
        <View
          style={[
            styles.postInner,
            {
              width: size - 2,
              height: size - 2,
            },
          ]}
        />
        <Image source={{ uri: image }} style={{ width: size - 2, height: size - 2, borderRadius: 4 }} resizeMode="cover" />
      </Box>
    </Pressable>
  );
};
