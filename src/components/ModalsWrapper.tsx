import { BlurView } from "@react-native-community/blur";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import ReactNativeModal from "react-native-modal";

interface Modal {
  isVisible: boolean;
  children: React.ReactNode;
  isBlurView: boolean;
  onClose: () => void;
}

const ModalsWrapper: React.FC<Modal> = ({
  isVisible,
  children,
  isBlurView,
  onClose,
}) => {
  return (
    <ReactNativeModal
      hasBackdrop={true}
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      statusBarTranslucent
      avoidKeyboard
      customBackdrop={
        <TouchableWithoutFeedback onPress={onClose} style={{ flex: 1 }}>
          {isBlurView ? (
            <BlurView style={{ flex: 1 }} blurType="dark">
              <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />
            </BlurView>
          ) : (
            <View style={{ flex: 1 }} />
          )}
        </TouchableWithoutFeedback>
      }
      style={{ zIndex: 9999, margin: 0 }}
      isVisible={isVisible}
    >
      {children}
    </ReactNativeModal>
  );
};

export default ModalsWrapper;

const styles = StyleSheet.create({});
