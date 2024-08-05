import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { IconsPath } from "../common/AssetsPath";
import useCustomNavigation from "../routes/useCustomNavigation";
import CustomButton from "./CustomButton";

const HeaderView = () => {
  const navigation = useCustomNavigation();

  return (
    <View style={[s.container, { height: "8%" }]}>
      <View style={s.flexView}>
        <CustomButton onPress={() => navigation.goBack()}>
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
