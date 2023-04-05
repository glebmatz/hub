import { palette } from "@ui/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: palette.white,
    paddingHorizontal: 15,
    borderRadius: 10,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowColor: palette.black + "0F",
    shadowOpacity: 1,
    borderWidth: 0.5,
    borderColor: palette.black + "0F",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.05)",
  },
});
