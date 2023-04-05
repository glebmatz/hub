import { palette } from "@ui/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: palette.white,
  },
  tabsContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 5,
  },
  cardsWrapper: {
    paddingHorizontal: 15,
  },
});
