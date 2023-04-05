import { palette } from "@ui/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: palette.background,
  },
  balance: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 3,
    backgroundColor: palette.success,
    alignItems: "center",
    justifyContent: "center",
  },
});
