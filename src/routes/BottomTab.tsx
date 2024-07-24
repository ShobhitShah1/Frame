import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Home from "../screens/Home";
import { RootStackParamList } from "../config/Interface";

const Tab = createBottomTabNavigator<RootStackParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTab;
