import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { RootStackParamList } from "../config/Interface";
import BottomTab from "./BottomTab";
import CanvasFrame from "../screens/CanvasFrame";

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerTab = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="CanvasFrame" component={CanvasFrame} />
    </Drawer.Navigator>
  );
};

export default DrawerTab;
