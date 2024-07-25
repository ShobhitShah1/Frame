import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React from "react";
import { ScrollView, View } from "react-native";
import { s } from "./style";

const Home = () => {
  const bottomTabHeight = useBottomTabBarHeight();

  return (
    <View style={[s.container]}>
      <ScrollView contentContainerStyle={{ paddingBottom: bottomTabHeight }}>
        <View></View>
      </ScrollView>
    </View>
  );
};

export default Home;
