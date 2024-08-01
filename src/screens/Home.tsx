import { BlurView } from "@react-native-community/blur";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React, { memo, useCallback } from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import { Shadow, ShadowProps } from "react-native-shadow-2";
import ScreenWrapper from "../components/ScreenWrapper";
import { useAnimatedCategories } from "../hooks/useAnimatedCategories";
import { s } from "./style";
import useCustomNavigation from "../routes/useCustomNavigation";
import { IconsPath } from "../common/AssetsPath";
import CustomButton from "../components/CustomButton";
import InsetShadow from "react-native-inset-shadow";

type ImageData = {
  id: string;
  uri: string;
};

type categories = {
  id: string;
  uri: string;
  name: string;
};

const images: ImageData[] = Array.from({ length: 20 }, (_, index) => ({
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
    offset: [0, 0],
    distance: -2,
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

const Home: React.FC = () => {
  const bottomTabHeight = useBottomTabBarHeight();
  const { animatedStyles } = useAnimatedCategories();
  const navigation = useCustomNavigation() as any;

  const ImageItem: React.FC<ImageItemProps> = memo(({ item, index }) => {
    const onPress = () => {
      navigation.navigate("CanvasFrame");
    };

    if (item.length === 1) {
      return (
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={[s.imageContainer, s.row]}
        >
          <Shadow {...ShadowPresets.view}>
            <Image source={{ uri: item[0].uri }} style={s.smallImage} />
          </Shadow>
        </TouchableOpacity>
      );
    }

    if (isBigImage(index * 2)) {
      return (
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPress}
          style={[s.row, s.imageContainer]}
        >
          <Shadow {...ShadowPresets.view}>
            <Image source={{ uri: item[0].uri }} style={s.largeImage} />
          </Shadow>
        </TouchableOpacity>
      );
    } else {
      return (
        <View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={[s.imageContainer]}
          >
            <Shadow {...ShadowPresets.view}>
              <Image source={{ uri: item[0].uri }} style={s.smallImage} />
            </Shadow>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={[s.imageContainer]}
          >
            <Shadow {...ShadowPresets.view}>
              <Image source={{ uri: item[1]?.uri }} style={s.smallImage} />
            </Shadow>
          </TouchableOpacity>
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

  const renderItem: ListRenderItem<ImageData[]> = useCallback(
    ({ item, index }) => <ImageItem item={item} index={index} />,
    []
  );

  return (
    <React.Fragment>
      <View
        style={[
          s.headerContainerView,
          {
            position: "absolute",
            top: 0,
            zIndex: 9999,
            left: 20,
          },
        ]}
      >
        <View style={s.saveHeaderFlexView}>
          <CustomButton
            onPress={() => navigation?.openDrawer()}
            style={s.saveMenuIconView}
          >
            <InsetShadow elevation={13}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Image source={IconsPath.ic_menu} style={s.saveIcons} />
              </View>
            </InsetShadow>
          </CustomButton>
        </View>
      </View>
      <ScreenWrapper style={{}}>
        <FlatList
          numColumns={2}
          data={groupedImages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          columnWrapperStyle={s.columnWrapperStyle}
          contentContainerStyle={[
            s.contentContainerStyle,
            { paddingBottom: bottomTabHeight + 80 },
          ]}
        />
      </ScreenWrapper>

      <View style={[s.categoryFloatingView, { bottom: bottomTabHeight }]}>
        <BlurView overlayColor="transparent" blurType="xlight" style={{}}>
          <Animated.View style={[animatedStyles]}>
            <ScrollView
              horizontal={true}
              style={{ paddingHorizontal: 10 }}
              contentContainerStyle={{ gap: 10 }}
              showsHorizontalScrollIndicator={false}
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
          </Animated.View>
        </BlurView>
      </View>
    </React.Fragment>
  );
};

export default Home;
