import { Image } from "expo-image";
import * as MediaLibrary from "expo-media-library";
import React, { useCallback, useRef, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Canvas from "react-native-canvas";
import ReactNativeModal from "react-native-modal";
import Animated, { FadeIn } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconsPath } from "../common/AssetsPath";
import CustomButton from "../components/CustomButton";
import HeaderView from "../components/HeaderView";
import { COLORS } from "../config/Theme";

const blurHash = IconsPath.ic_imagePlaceholder;

const CanvasFrame = () => {
  const canvasRef = useRef<Canvas>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const [albums, setAlbums] = useState<any[] | null>(null);
  const [mediaModalVisible, setMediaModalVisible] = useState(false);

  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const getAlbums = async () => {
    if (permissionResponse && permissionResponse.status !== "granted") {
      await requestPermission();
    }

    const fetchedAlbums = await MediaLibrary.getAssetsAsync({});

    if (fetchedAlbums.assets.length !== 0) {
      setAlbums(fetchedAlbums.assets);
      setMediaModalVisible(true);
    }
  };

  const renderImageView = ({ item }: any) => {
    const isSelected = selectedImages.includes(item.uri);
    return (
      <CustomButton
        onPress={() => handleImageSelect(item.uri)}
        style={{ width: "33%", height: 110 }}
      >
        <Image
          source={{ uri: item.uri }}
          style={{ width: "100%", height: "100%" }}
          transition={1000}
          contentFit="cover"
          enableLiveTextInteraction
          placeholder={blurHash}
        />
        {isSelected && (
          <Animated.View
            entering={FadeIn.duration(500)}
            style={s.selectedImageContainer}
          >
            <Image source={IconsPath.ic_checkMark} style={s.checkMark} />
          </Animated.View>
        )}
      </CustomButton>
    );
  };

  const handleImageSelect = useCallback(
    (uri: string) => {
      setSelectedImages((prev) => {
        if (prev.includes(uri)) {
          return prev.filter((imageUri) => imageUri !== uri);
        } else {
          return [...prev, uri];
        }
      });
    },
    [selectedImages]
  );

  const onBottomButtonPress = useCallback(() => {
    if (selectedImages?.length === 0) {
      getAlbums();
    } else {
    }
  }, [selectedImages]);

  const onCloseModal = useCallback(() => {
    setMediaModalVisible(false);
    setSelectedImages([]);
  }, [mediaModalVisible]);

  return (
    <SafeAreaView style={s.container}>
      <HeaderView />

      <View style={s.canvasView}>
        <Canvas ref={canvasRef} style={s.canvas} />
      </View>

      <View style={s.buttonView}>
        <CustomButton style={s.downloadButton} onPress={onBottomButtonPress}>
          <Text style={s.downloadButtonText}>
            {selectedImages?.length === 0 ? "+ Upload image" : "Download"}
          </Text>
        </CustomButton>
      </View>

      <ReactNativeModal
        useNativeDriver
        statusBarTranslucent
        useNativeDriverForBackdrop
        style={s.mediaModalContainer}
        isVisible={mediaModalVisible}
        onBackdropPress={onCloseModal}
        onBackButtonPress={onCloseModal}
      >
        <SafeAreaView style={s.mediaModalContainer}>
          <View style={s.mediaHeaderView}>
            <View style={s.headerFlexView}>
              <CustomButton onPress={onCloseModal}>
                <Image
                  source={IconsPath.ic_back}
                  style={s.closeIcon}
                  contentFit="contain"
                />
              </CustomButton>
            </View>
          </View>
          <FlatList
            data={albums}
            numColumns={3}
            renderItem={renderImageView}
            keyExtractor={(item, index) => index.toString()}
          />

          <CustomButton
            disabled={selectedImages?.length === 0}
            style={[
              s.submitViewButton,
              {
                backgroundColor:
                  selectedImages?.length === 0
                    ? COLORS.White
                    : "rgba(119, 125, 254, 1)",
              },
            ]}
            onPress={() => {
              setMediaModalVisible(false);
            }}
          >
            <Image
              tintColor={
                selectedImages?.length !== 0
                  ? COLORS.White
                  : "rgba(187, 192, 192, 1)"
              }
              source={IconsPath.ic_leftArrow}
              style={s.submitIcon}
            />
          </CustomButton>
        </SafeAreaView>
      </ReactNativeModal>
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

  mediaModalContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
    backgroundColor: COLORS.White,
  },
  mediaHeaderView: {
    width: "100%",
    height: "8%",
    justifyContent: "center",
  },
  headerFlexView: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeIcon: {
    width: 23,
    height: 23,
    tintColor: "rgba(132, 132, 132, 1)",
  },
  selectedImageContainer: {
    position: "absolute",
    top: 5,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(119, 125, 254, 1)",
  },
  checkMark: {
    width: 12,
    height: 12,
    bottom: 1,
  },
  submitViewButton: {
    position: "absolute",
    bottom: 15,
    right: 15,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    elevation: 2,
    justifyContent: "center",
  },
  submitIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
