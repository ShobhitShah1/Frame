import { StyleSheet } from "react-native";
import { COLORS } from "../config/Theme";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  textView: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 17,
    textAlign: "center",
  },
});
