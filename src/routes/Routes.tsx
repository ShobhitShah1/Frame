import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackParamList, screenOptions } from "../config/Interface";
import { COLORS } from "../config/Theme";
import Drawer from "./DrawerTab";
import { StatusBar } from "react-native";
import CanvasFrame from "../screens/CanvasFrame";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: COLORS.White }}>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="DrawerTab" component={Drawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
