import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderView from "../components/HeaderView";
import { COLORS } from "../config/Theme";

const CanvasFrame = () => {
  return (
    <SafeAreaView style={s.container}>
      <HeaderView />
    </SafeAreaView>
  );
};

export default CanvasFrame;

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
});
