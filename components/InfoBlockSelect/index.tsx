import { Check } from "@ui/icons";
import { palette } from "@ui/theme/theme";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Box from "../Box";
import Text from "../Text";

interface IInfoBlockProps {
  title: string;
  description: string;
  isActive: boolean;
  onPress?: () => void;
}

export const InfoBlockSelect: React.FC<IInfoBlockProps> = (props) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
      <Box flex={1} marginRight="ll">
        <Text variant="PSemibold" marginBottom="s" color={props.isActive ? "buttonPrimary" : "textRegular"}>
          {props.title}
        </Text>
        <Text variant="caption1" color="textLabel">
          {props.description}
        </Text>
      </Box>
      <Box width={25}>{props.isActive && <Check />}</Box>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: palette.black + "1A",
  },
});
