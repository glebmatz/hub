import { InputLinkIcon } from "@ui/icons";
import React, { forwardRef, useEffect, useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { TLinkCheckData, TLinkCheckError } from "types/order.store";
import { AccountSearchData } from "../AccountSearchData";
import { BaseInput } from "../BaseInput";
import Box from "../Box";
import { styles } from "./AccountSearchInputStyle";

const BASE_HEIGHT = 50;

interface IAccountSearchInput extends TextInputProps {
  expanded: boolean;
  state: "empty" | "error" | "loading" | "success";
  loading: boolean;
  data?: TLinkCheckData | null;
  error?: TLinkCheckError | null;
  onSearchPosts?: () => void;
  postsLoading: boolean;
  hidePostsSearch: boolean;
}

export const AccountSearchInput = forwardRef<TextInput, IAccountSearchInput>((props, ref) => {
  const expanded = useSharedValue(0);
  const [, setFocused] = useState(false);

  useEffect(() => {
    if (expanded.value === 0 && props.expanded) {
      expanded.value = withTiming(1, { duration: 100 });
    }
    if (expanded.value === 1 && !props.expanded) {
      expanded.value = withTiming(0, { duration: 100 });
    }
  }, [props.expanded]);

  const height = useAnimatedStyle(() => {
    return {
      height: expanded.value * 50 + BASE_HEIGHT,
    };
  });

  return (
    <Animated.View style={[styles.wrapper, height]}>
      <Box height={BASE_HEIGHT} justifyContent="center">
        <BaseInput
          ref={ref}
          value={props.value}
          onChangeText={props.onChangeText}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          clearButtonMode="always"
          placeholder="Ссылка на пост, аккаунт, @nickname"
          iconLeft={<InputLinkIcon />}
          iconMargin={{ marginRight: "m" }}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Box>
      <AccountSearchData
        onSearchPosts={props.onSearchPosts}
        state={props.state}
        loading={props.loading}
        data={props.data}
        error={props.error}
        postsLoading={props.postsLoading}
        hidePostsSearch={props.hidePostsSearch}
      />
    </Animated.View>
  );
});
