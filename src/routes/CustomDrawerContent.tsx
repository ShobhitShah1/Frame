import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View } from "react-native";
import { IconsPath } from "../common/AssetsPath";
import { COLORS, FONTS } from "../config/Theme";
import CustomButton from "../components/CustomButton";

export const CustomDrawerContent = () => {
  const LinkView = ({
    iconName,
    title,
  }: {
    iconName: number;
    title: string;
  }) => {
    return (
      <CustomButton style={s.linkFlex}>
        <Image source={iconName} style={s.linkIcon} />
        <Text style={{ fontWeight: "bold", fontSize: 16, color: COLORS.White }}>
          {title}
        </Text>
      </CustomButton>
    );
  };

  return (
    <DrawerContentScrollView style={s.container}>
      <View style={s.topTitleView}>
        <View style={s.topFlexView}>
          <Image source={IconsPath.ic_setting} style={s.settingIcon} />
          <Text style={s.titleText}>Setting</Text>
        </View>
      </View>

      <View>
        <LinkView iconName={IconsPath.ic_qAndA} title="Q&A" />
        <LinkView iconName={IconsPath.ic_qAndA} title="Feedback" />
        <LinkView iconName={IconsPath.ic_qAndA} title="Rate us" />
        <LinkView iconName={IconsPath.ic_qAndA} title="Share" />
        <LinkView iconName={IconsPath.ic_qAndA} title="Privacy policy" />
      </View>
    </DrawerContentScrollView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: "rgba(11, 10, 10, 0.8)",
  },
  topTitleView: {
    width: "100%",
    height: 60,
    top: -5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(119, 125, 254, 1)",
  },
  topFlexView: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  settingIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    right: 10,
    tintColor: COLORS.White,
  },
  titleText: {
    color: COLORS.White,
    fontFamily: FONTS.Bold,
    fontSize: 20,
    fontWeight: "bold",
  },
  linkFlex: {
    flexDirection: "row",
    width: "90%",
    paddingVertical: 14,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginVertical: 5,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 10,
  },
  linkIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginHorizontal: 10,
  },
});
