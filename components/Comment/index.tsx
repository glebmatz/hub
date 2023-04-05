import { EditIcon, Trash } from "@ui/icons";
import React, { FC } from "react";
import { Pressable } from "react-native";
import Box from "../Box";
import Text from "../Text";

interface IComment {
  index: number;
  text: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const Comment: FC<IComment> = ({ index, text, onEdit, onDelete }) => {
  return (
    <Box padding="m" borderRadius={10} backgroundColor="delimiterColor" marginTop="l">
      <Box marginBottom="s" flexDirection="row" alignItems="center" justifyContent="space-between">
        <Text variant="caption1" color="iconAction3">
          {index + 1} комментарий
        </Text>
        <Box flexDirection="row" alignItems="center">
          <Pressable onPress={onEdit}>
            <EditIcon />
          </Pressable>
          <Pressable style={{ marginLeft: 15 }} onPress={onDelete}>
            <Trash />
          </Pressable>
        </Box>
      </Box>
      <Box>
        <Text variant="regular">{text}</Text>
      </Box>
    </Box>
  );
};
