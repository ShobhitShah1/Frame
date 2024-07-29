import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../config/Theme";

const { width } = Dimensions.get("window");

const IMAGE_WIDTH = width / 2 - 8;
const IMAGE_HEIGHT = 300;
const SMALL_IMAGE_HEIGHT = IMAGE_HEIGHT / 2 - 5;

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  contentContainerStyle: {},
  imageContainer: {},
  row: {
    // marginBottom: 5,
  },
  largeImage: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: COLORS.White,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  smallImage: {
    width: IMAGE_WIDTH,
    height: SMALL_IMAGE_HEIGHT,
    marginBottom: 10,

    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: COLORS.White,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  columnWrapperStyle: {
    marginHorizontal: 5,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryFloatingView: {
    // paddingBottom: 20,
    paddingHorizontal: 15,
    position: "absolute",
  },
  categoryContainer: {},
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 500,
  },
  categoryName: {},
});
