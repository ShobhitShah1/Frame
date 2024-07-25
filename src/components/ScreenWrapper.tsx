import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React from "react";
import { ScrollView, View } from "react-native";
import { ScreenWrapperProps } from "../config/Interface";
import { s } from "../screens/style";

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  containerStyle,
  ...scrollViewProps
}) => {
  const bottomTabHeight = useBottomTabBarHeight();

  return (
    <View style={[s.container, containerStyle]}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: bottomTabHeight }}
        {...scrollViewProps}
      >
        {children}
      </ScrollView>
    </View>
  );
};

export default ScreenWrapper;
