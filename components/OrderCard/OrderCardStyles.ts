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
    width: 45,
    height: 45,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: palette.black + "12",
  },
  delimiter: {
    width: "100%",
    backgroundColor: palette.black + "12",
    height: 1,
  },
  circle: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: palette.action2,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
});
