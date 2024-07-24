import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { RootStackParamList } from "../config/Interface";
import BottomTab from "./BottomTab";

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerTab = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
    </Drawer.Navigator>
  );
};

export default DrawerTab;
