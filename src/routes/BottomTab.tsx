import { BlurView } from "@react-native-community/blur";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";
import { IconsPath } from "../common/AssetsPath";
import { RootStackParamList } from "../config/Interface";
import { COLORS } from "../config/Theme";
import Home from "../screens/Home";
import Market from "../screens/Market";
import Save from "../screens/Save";

const Tab = createBottomTabNavigator<RootStackParamList>();

type ScreenOptionsProps = {
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
  navigation: any;
};

const TabIcon = memo(
  ({ source, focused }: { source: any; focused: boolean }) => (
    <Image
      style={[
        styles.icon,
        { tintColor: focused ? COLORS.White : COLORS.Black },
      ]}
      source={source}
    />
  )
);

const screenOptions = ({
  route,
}: ScreenOptionsProps): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }: { focused: boolean }) => {
    let source;
    switch (route.name) {
      case "Home":
        source = IconsPath.ic_home;
        break;
      case "Market":
        source = IconsPath.ic_market;
        break;
      case "Save":
        source = IconsPath.ic_save;
        break;
    }
    return <TabIcon source={source} focused={focused} />;
  },
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: { position: "absolute", borderTopWidth: undefined },
  tabBarBackground: () => (
    <BlurView
      blurType="xlight"
      blurAmount={80}
      style={styles.blurView}
      overlayColor="transparent"
    />
  ),
});

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      // tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Save" component={Save} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  blurView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  back: {
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 120,
    maxHeight: 500,
    alignItems: "center",
    position: "absolute",
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
  },
  button: {
    height: 7,
    width: 45,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.Primary,
  },
});
