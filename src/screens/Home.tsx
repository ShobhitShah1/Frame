import React, { memo, useCallback } from "react";
import {
  FlatList,
  Image,
  View,
  ListRenderItem,
  ScrollView,
  Text,
} from "react-native";
import { Shadow, ShadowProps } from "react-native-shadow-2";
import ScreenWrapper from "../components/ScreenWrapper";
import { s } from "./style";
import { BlurView } from "@react-native-community/blur";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

type ImageData = {
  id: string;
  uri: string;
};

type categories = {
  id: string;
  uri: string;
  name: string;
};

const images: ImageData[] = Array.from({ length: 12 }, (_, index) => ({
  id: (index + 1).toString(),
  uri: `https://picsum.photos/200/${Math.floor(Math.random() * 1000)}`,
}));

const categories: categories[] = Array.from({ length: 30 }, (_, index) => ({
  id: (index + 1).toString(),
  uri: `https://picsum.photos/200/${Math.floor(Math.random() * 1000)}`,
  name: "John Smith" + index,
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

const ImageItem: React.FC<ImageItemProps> = memo(({ item, index }) => {
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
});

const groupedImages = images.reduce<ImageData[][]>((acc, curr, index) => {
  if (index % 2 === 0) {
    acc.push([curr]);
  } else {
    acc[acc.length - 1].push(curr);
  }
  return acc;
}, []);

const Home: React.FC = () => {
  const bottomTabHeight = useBottomTabBarHeight();

  const renderItem: ListRenderItem<ImageData[]> = useCallback(
    ({ item, index }) => <ImageItem item={item} index={index} />,
    []
  );

  console.log(bottomTabHeight);

  return (
    <React.Fragment>
      <ScreenWrapper>
        <FlatList
          numColumns={2}
          data={groupedImages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          columnWrapperStyle={s.columnWrapperStyle}
          contentContainerStyle={s.contentContainerStyle}
        />
      </ScreenWrapper>
      <ScrollView
        horizontal
        style={[s.categoryFloatingView, { bottom: bottomTabHeight + 10 }]}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
      >
        {categories.map((item, index) => {
          return (
            <View key={index} style={[s.categoryContainer, {}]}>
              <Image source={{ uri: item.uri }} style={s.categoryImage} />
              <Text style={s.categoryName}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </React.Fragment>
  );
};

export default Home;
