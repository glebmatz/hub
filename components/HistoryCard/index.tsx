import React from "react";
import Box from "../Box";
import Text from "../Text";

interface IHistoryCardProps {
  date: string;
  action: string;
  description: string;
  type: number;
  count: number;
  position?: "first" | "last";
}

export const HistoryCard: React.FC<IHistoryCardProps> = (props) => {
  return (
    <Box
      paddingVertical="ll"
      borderColor="delimiterColor"
      borderTopWidth={props.position === "first" ? 0 : 1}
      borderBottomWidth={props.position === "last" ? 0 : 1}
    >
      <Box flexDirection="row" alignItems="center" justifyContent="space-between">
        <Box flex={4}>
          <Box marginBottom="s">
            <Text variant="caption2" numberOfLines={1}>
              {props.date}
            </Text>
          </Box>
          <Box marginBottom="s">
            <Text variant="regularMedium" numberOfLines={1}>
              {props.action}
            </Text>
          </Box>
          <Box>
            <Text variant="caption2">{props.description}</Text>
          </Box>
        </Box>
        <Box flex={1}>
          <Text variant="subheadBold" textAlign="right" color={props.type === 1 ? "textSuccess" : "textWarning"}>
            {props.type === 1 ? "+" : "-"}
            {props.count}₽
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
