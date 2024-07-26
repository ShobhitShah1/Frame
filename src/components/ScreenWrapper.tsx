import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenWrapperProps } from "../config/Interface";
import { s } from "../screens/style";

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  containerStyle,
  ...scrollViewProps
}) => {
  const bottomTabHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView style={[s.container, containerStyle]}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: bottomTabHeight }}
        {...scrollViewProps}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
