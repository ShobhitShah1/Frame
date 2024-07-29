import React, { useCallback } from "react";
import { FlatList, Image, View, ListRenderItem } from "react-native";
import { Shadow, ShadowProps } from "react-native-shadow-2";
import ScreenWrapper from "../components/ScreenWrapper";
import { s } from "./style";

type ImageData = {
  id: string;
  uri: string;
};

const images: ImageData[] = Array.from({ length: 150 }, (_, index) => ({
  id: (index + 1).toString(),
  uri: `https://picsum.photos/200/${Math.floor(Math.random() * 1000)}`,
}));

const ShadowPresets: { view: ShadowProps } = {
  view: {
    offset: [0, 2],
    distance: -5,
    startColor: "#c5c5c5",
    safeRender: true,
  },
};

const isBigImage = (index: number): boolean => {
  const position = (index % 10) + 1;
  return position === 1 || position === 6 || position === 7;
};

type ImageItemProps = {
  item: ImageData[];
  index: number;
};

const ImageItem: React.FC<ImageItemProps> = ({ item, index }) => {
  if (item.length === 1) {
    return (
      <View style={[s.imageContainer, s.row]}>
        <Shadow {...ShadowPresets.view}>
          <Image source={{ uri: item[0].uri }} style={s.smallImage} />
        </Shadow>
      </View>
    );
  }

  if (isBigImage(index * 2)) {
    return (
      <View style={[s.row, s.imageContainer]}>
        <Shadow {...ShadowPresets.view}>
          <Image source={{ uri: item[0].uri }} style={s.largeImage} />
        </Shadow>
      </View>
    );
  } else {
    return (
      <View style={[s.imageContainer]}>
        <Shadow {...ShadowPresets.view}>
          <Image source={{ uri: item[0].uri }} style={s.smallImage} />
        </Shadow>
        <Shadow {...ShadowPresets.view}>
          <Image source={{ uri: item[1]?.uri }} style={s.smallImage} />
        </Shadow>
      </View>
    );
  }
};

const groupedImages = images.reduce<ImageData[][]>((acc, curr, index) => {
  if (index % 2 === 0) {
    acc.push([curr]);
  } else {
    acc[acc.length - 1].push(curr);
  }
  return acc;
}, []);

const Market: React.FC = () => {
  const renderItem: ListRenderItem<ImageData[]> = useCallback(
    ({ item, index }) => <ImageItem item={item} index={index} />,
    []
  );

  return (
    <ScreenWrapper>
      <FlatList
        numColumns={2}
        data={groupedImages}
        renderItem={renderItem}
        columnWrapperStyle={s.columnWrapperStyle}
        contentContainerStyle={s.contentContainerStyle}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScreenWrapper>
  );
};

export default Market;
