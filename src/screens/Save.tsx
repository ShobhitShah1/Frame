import React from "react";
import { Text, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { s } from "./style";

const Save = () => {
  return (
    <ScreenWrapper>
      <View style={s.textView}>
        <Text style={s.text}>Save Screen</Text>
      </View>
    </ScreenWrapper>
  );
};

export default Save;
