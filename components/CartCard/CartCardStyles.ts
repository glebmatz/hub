import { palette } from "@ui/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  countButton: {
    width: 22,
    height: 22,
    backgroundColor: "rgba(0,0,0,.04)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: palette.black + "12",
  },
});
