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
        <TouchableWithoutFeedback onPress={onClose} style={s.flex}>
          {isBlurView ? (
            <BlurView style={s.flex} blurType="dark">
              <View style={s.blurView} />
            </BlurView>
          ) : (
            <View style={{ flex: 1 }} />
          )}
        </TouchableWithoutFeedback>
      }
      style={s.modalContainer}
      isVisible={isVisible}
    >
      {children}
    </ReactNativeModal>
  );
};

export default ModalsWrapper;

const s = StyleSheet.create({
  flex: {
    flex: 1,
  },
  blurView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    zIndex: 9999,
    margin: 0,
  },
});
