import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  labelStyle: {
    position: "absolute",
    left: 0,
    color: "#999999",
  },
  subLabelStyle: {
    left: 0,
    color: "#999999",
    position: "relative",
    fontSize: 13,
    top: 0,
    zIndex: 10,
  },
  subLabelWrapper: {
    position: "absolute",
    left: undefined,
    right: 0,
    top: 0,
  },
  pressableWrapper: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 100,
    position: "absolute",
  },
});
