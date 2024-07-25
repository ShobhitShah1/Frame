import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import { RootStackParamList } from "../config/Interface";
import Market from "../screens/Market";
import Save from "../screens/Save";
import { StyleSheet, View } from "react-native";
import { BlurView } from "@react-native-community/blur";

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
        },
        tabBarBackground: () => (
          <BlurView
            blurAmount={80}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "transparent",
              overflow: "hidden",
            }}
            overlayColor="transparent"
          />
        ),
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name="Save" component={Save} />
    </Tab.Navigator>
  );
};

export default BottomTab;
