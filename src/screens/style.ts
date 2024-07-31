import { Dimensions, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../config/Theme";

const { width } = Dimensions.get("window");
const IMAGE_WIDTH = width / 2 - 8;
const IMAGE_HEIGHT = 300;
const SMALL_IMAGE_HEIGHT = IMAGE_HEIGHT / 2 - 5;
const MENU_ICON_SIZE = 40;

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  contentContainerStyle: {},
  imageContainer: {},
  row: {},
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
    position: "absolute",
    overflow: "visible",
  },
  categoryContainer: {
    overflow: "visible",
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 500,
    borderWidth: 3,
    borderColor: COLORS.White,
  },
  categoryName: {
    color: COLORS.White,
    fontSize: 15,
    textAlign: "center",
    fontFamily: FONTS.Bold,
  },

  //* Save
  saveWidthWrapper: {
    width: "90%",
    alignSelf: "center",
  },
  headerContainerView: {
    height: 50,
    width: "100%",
    marginVertical: 5,
    alignSelf: "center",
    justifyContent: "center",
  },
  saveHeaderFlexView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  saveMenuIconView: {
    width: MENU_ICON_SIZE,
    height: MENU_ICON_SIZE,
    borderRadius: 500,
    overflow: "hidden",
    backgroundColor: "white",
    justifyContent: "center",
  },
  saveIcons: {
    width: MENU_ICON_SIZE / 2,
    height: MENU_ICON_SIZE / 2,
    alignSelf: "center",
    resizeMode: "contain",
  },
  saveHeaderDeleteAndSelectFlexView: {
    flexDirection: "row",
    gap: 20,
  },
  saveDeleteAndSelectIcon: {
    width: 22,
    height: 22,
    alignSelf: "center",
    resizeMode: "contain",
  },
  saveListTitleHeader: {
    marginVertical: 10,
  },
  saveListTitle: {
    fontSize: 18,
    color: COLORS.Black,
    fontFamily: FONTS.Bold,
  },
  saveColumnWrapperStyle: {
    justifyContent: "space-between",
  },
  saveItemContainer: {
    width: "48%",
    height: 180,
    borderRadius: 10,
    overflow: "hidden",
  },
  saveItemImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
