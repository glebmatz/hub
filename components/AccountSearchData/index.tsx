import { ErrorIcon } from "@ui/icons";
import React from "react";
import { ActivityIndicator, Image, Pressable } from "react-native";
import { TLinkCheckData, TLinkCheckError } from "types/order.store";
import Box from "../Box";
import Text from "../Text";
import { styles } from "./AccountSearchDataStyles";

interface IAccountSearchData {
  state: "empty" | "error" | "loading" | "success";
  loading: boolean;
  data?: TLinkCheckData | null;
  error?: TLinkCheckError | null;
  onSearchPosts?: () => void;
  postsLoading?: boolean;
  hidePostsSearch?: boolean;
}

export const AccountSearchData: React.FC<IAccountSearchData> = (props) => {
  return (
    <Box paddingVertical="m">
      {props.loading && (
        <Box flexDirection="row" alignItems="center" height={30}>
          <Box width={30} alignItems="center">
            <ActivityIndicator size="small" />
          </Box>
          <Text variant="caption1" color="textLabel" marginLeft="m">
            Поиск...
          </Text>
        </Box>
      )}
      {props.error && (
        <Box flexDirection="row" alignItems="center" height={30}>
          <Box width={30} alignItems="center">
            <ErrorIcon />
          </Box>
          <Text variant="warning40" marginLeft="m">
            {props.error[0] && props.error[0].field === "url" && "Укажите верную ссылку"}
          </Text>
        </Box>
      )}
      {props.data && (
        <Box flexDirection="row" alignItems="center" justifyContent="space-between" height={30}>
          <Box flexDirection="row" alignItems="center">
            <Box width={30} height={30} borderRadius={30}>
              <Image source={{ uri: props.data.img }} style={styles.avatar} />
            </Box>
            <Text variant="primary1" marginLeft="m">
              {props.data.name}
            </Text>
          </Box>
          {(props.data.soc_object_type === 1 || props.data.soc_object_type === 3) && !props.hidePostsSearch && (
            <Box>
              <Pressable style={styles.findPosts} onPress={props.onSearchPosts}>
                {props.postsLoading ? (
                  <ActivityIndicator size="small" />
                ) : (
                  <Text variant="caption2" color="textRegular">
                    Найти посты
                  </Text>
                )}
              </Pressable>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
