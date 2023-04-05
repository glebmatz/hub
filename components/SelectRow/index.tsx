import { Check } from "@ui/icons";
import { palette } from "@ui/theme/theme";
import React, { FC, ReactElement } from "react";
import { Pressable, StyleSheet } from "react-native";
import Box from "../Box";
import Text from "../Text";

interface ISelectRow {
  iconSize?: { width: number; height: number };
  icon?: ReactElement;
  title: string;
  selected: boolean;
  onPress: () => void;
}

export const SelectedRow: FC<ISelectRow> = ({ iconSize, title, selected, icon, onPress }) => (
  <Pressable style={styles.wrapper} onPress={onPress}>
    {icon && iconSize && (
      <Box width={iconSize.width} height={iconSize.height} marginRight="l">
        {icon && React.cloneElement(icon, { color: selected ? palette.action2 : palette.gray5 })}
      </Box>
    )}
    <Box height={21} flex={1}>
      <Text variant="PSemibold" color={selected ? "textTabActive" : "textRegular"}>
        {title}
      </Text>
    </Box>
    <Box width={25}>{selected && <Check />}</Box>
  </Pressable>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
