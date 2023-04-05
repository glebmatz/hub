import React, { FC, ReactElement } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import Box from "@ui/components/Box";
import Text from "@ui/components/Text";
import { palette } from "@ui/theme/theme";

interface ITopupRow extends PressableProps {
  icon: ReactElement;
  title?: string;
  commission?: string;
  right?: ReactElement;
  selected?: boolean;
}

export const TopupRow: FC<ITopupRow> = ({ icon, title, commission, right, selected, ...props }) => {
  return (
    <Pressable style={[styles.wrapper, selected && styles.selected]} {...props}>
      <Box flexDirection="row" alignItems="center" flex={1}>
        <Box marginRight="l" width={35} alignItems="center">
          {icon}
        </Box>
        <Box style={styles.infoRow}>
          <Text variant="PSemibold" color={selected ? "textTabActive" : "textRegular"}>
            {title}
          </Text>
        </Box>
      </Box>
      <Box>{right ? right : <Text variant="caption2">Комиссия {commission}%</Text>}</Box>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 6,
    paddingHorizontal: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: palette.black + "12",
  },
  selected: {
    backgroundColor: palette.black + "12",
  },
  infoRow: {
    paddingVertical: 15,
  },
});
