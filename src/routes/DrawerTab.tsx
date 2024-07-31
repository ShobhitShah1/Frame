import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { RootStackParamList } from "../config/Interface";
import BottomTab from "./BottomTab";
import CanvasFrame from "../screens/CanvasFrame";
import { CustomDrawerContent } from "./CustomDrawerContent";

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerTab = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "transparent" },
      }}
    >
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="CanvasFrame" component={CanvasFrame} />
    </Drawer.Navigator>
  );
};

export default DrawerTab;
