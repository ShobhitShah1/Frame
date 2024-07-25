import React from "react";
import { Text, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { s } from "./style";

const Home = () => {
  return (
    <ScreenWrapper>
      <View style={s.textView}>
        <Text style={s.text}>Home Screen</Text>
      </View>
    </ScreenWrapper>
  );
};

export default Home;
