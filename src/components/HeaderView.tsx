import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { IconsPath } from "../common/AssetsPath";

const HeaderView = () => {
  return (
    <View style={s.container}>
      <View style={s.flexView}>
        <CustomButton>
          <Image style={s.icons} source={IconsPath.ic_back} />
        </CustomButton>
        <CustomButton>
          <Image style={s.icons} source={IconsPath.ic_eye} />
        </CustomButton>
      </View>
    </View>
  );
};

export default HeaderView;

const s = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: "center",
    alignContent: "center",
  },
  flexView: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons: {
    width: 23,
    height: 23,
    alignItems: "center",
    resizeMode: "contain",
  },
});
