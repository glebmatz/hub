import { palette } from "@ui/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    lineHeight: 16,
    color: palette.gray1,
    flex: 1,
  },
  wrapper: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  pressableArea: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    zIndex: 20000,
  },
});
