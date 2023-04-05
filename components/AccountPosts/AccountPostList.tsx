import { IAccountPost } from "@api/apiTypes";
import React, { FC } from "react";
import Box from "../Box";
import Text from "../Text";
import { AccountPost } from "./AccountPost";

interface IAccountPostList {
  data: IAccountPost[];
  displayShowMore: boolean;
  activePost?: string;
  onNextPagePress: () => void;
  onCardPress: (item: IAccountPost) => void;
  itemSize: number;
}

export const AccountPostList: FC<IAccountPostList> = ({ data, activePost, itemSize, displayShowMore, onNextPagePress, onCardPress }) => {
  return (
    <Box>
      <Box marginBottom="l">
        <Text variant="headlineMedium">Выберите публикации</Text>
      </Box>
      <Box flexDirection="row" justifyContent="space-between" flexWrap="wrap">
        {data.map((post) => (
          <AccountPost
            number={post.id === activePost ? 1 : undefined}
            size={itemSize}
            isActive={post.id === activePost}
            image={post.image}
            onPress={() => onCardPress(post)}
          />
        ))}
      </Box>
    </Box>
  );
};
