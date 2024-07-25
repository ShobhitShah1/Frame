import React from "react";
import { Text, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { s } from "./style";

const Market = () => {
  return (
    <ScreenWrapper>
      <View style={s.textView}>
        <Text style={s.text}>Market Screen</Text>
      </View>
    </ScreenWrapper>
  );
};

export default Market;
