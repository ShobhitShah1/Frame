import { BlurView } from "@react-native-community/blur";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import React, { memo } from "react";
import { Image, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../config/Interface";
import Home from "../screens/Home";
import Market from "../screens/Market";
import Save from "../screens/Save";
import { IconsPath } from "../common/AssetsPath";
import { COLORS } from "../config/Theme";

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

const BottomTab = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Market" component={Market} />
    <Tab.Screen name="Save" component={Save} />
  </Tab.Navigator>
);

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
});
