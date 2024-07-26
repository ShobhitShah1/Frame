import React from "react";
import { FlatList, Image, View } from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import { s } from "./style";

const images = [
  { id: "1", uri: "https://picsum.photos/200/300" },
  { id: "2", uri: "https://picsum.photos/200/400" },
  { id: "3", uri: "https://picsum.photos/200/500" },
  { id: "4", uri: "https://picsum.photos/200/600" },
  { id: "5", uri: "https://picsum.photos/200/700" },
  { id: "6", uri: "https://picsum.photos/200/800" },
  { id: "7", uri: "https://picsum.photos/200/900" },
];

const Home = () => {
  const ImageItem = ({ item, index }) => {
    const isRight = index % 4 === 0 || index % 4 === 1;
    const imageStyle = isRight ? s.imageRight : s.imageLeft;

    return (
      <View style={s.imageContainer}>
        <Image source={{ uri: item.uri }} style={[s.image, imageStyle]} />
      </View>
    );
  };

  return (
    <ScreenWrapper>
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <ImageItem item={item} index={index} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={s.columnWrapperStyle}
        contentContainerStyle={s.container}
      />
    </ScreenWrapper>
  );
};

export default Home;
