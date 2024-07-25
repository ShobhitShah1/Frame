import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from "@react-navigation/drawer/lib/typescript/src/types";
import { DrawerNavigationState, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { COLORS } from "./Theme";
import { ScrollViewProps, ViewStyle } from "react-native";
import { ReactNode } from "react";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  DrawerTab: undefined;
  BottomTab: undefined;
  Home: undefined;
  Market: undefined;
  Save: undefined;
};

export interface ScreenWrapperProps extends ScrollViewProps {
  children: ReactNode;
  containerStyle?: ViewStyle;
}

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "fade",
  animationTypeForReplace: "push",
  presentation: "transparentModal",
  navigationBarColor: COLORS.White,
};

export interface CustomDrawerContentProps {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
}
