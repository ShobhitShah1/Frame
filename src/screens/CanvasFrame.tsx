import React, { useRef } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderView from "../components/HeaderView";
import { COLORS } from "../config/Theme";
import Canvas from "react-native-canvas";
import CustomButton from "../components/CustomButton";

const CanvasFrame = () => {
  const canvasRef = useRef<Canvas>(null);
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView style={s.container}>
      <HeaderView />

      <View style={s.canvasView}>
        <Canvas ref={canvasRef} style={s.canvas} />
      </View>

      <View style={s.buttonView}>
        <CustomButton style={s.downloadButton} onPress={() => {}}>
          <Text style={s.downloadButtonText}>Download</Text>
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default CanvasFrame;

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  canvasView: {
    width: "90%",
    marginTop: 10,
    alignSelf: "center",
    height: "80%",
    backgroundColor: "red",
  },
  canvas: {
    width: "90%",
    height: "80%",
  },
  buttonView: {
    height: "12%",
    alignItems: "center",
    justifyContent: "center",
  },
  downloadButton: {
    width: "90%",
    height: 45,
    backgroundColor: "rgba(119, 125, 254, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  downloadButtonText: {
    color: COLORS.White,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
