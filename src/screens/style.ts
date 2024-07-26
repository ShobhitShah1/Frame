import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../config/Theme";

const { width } = Dimensions.get("window");

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
  imageContainer: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: "50%",
    height: 200,
    resizeMode: "cover",
  },
  imageRight: {
    width: "100%",
    height: 100,
  },
  imageLeft: {
    alignSelf: "flex-start",
  },
  columnWrapperStyle: {
    justifyContent: "space-between",
  },
});
