import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    zIndex: 100100,
    ...StyleSheet.absoluteFillObject,
  },
  dark: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000",
  },
  full: {
    width: "100%",
    height: "100%",
  },
});
