import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    paddingLeft: 36,
    height: Platform.OS === "ios" ? 35 : 40,
    fontSize: 15,
    lineHeight: 15,
    color: "#4B4B4B",
    borderBottomWidth: 1,
    borderBottomColor: "#CECDCC",
    width: "100%",
  },
  pressableArea: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    zIndex: 20000,
  },
});
