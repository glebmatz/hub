import { palette } from "@ui/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    backgroundColor: palette.white,
    borderWidth: 1,
    borderColor: palette.black + "12",
    marginBottom: 15,
    borderRadius: 12,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  delimiter: {
    width: "100%",
    backgroundColor: palette.black + "12",
    height: 1,
  },
});
