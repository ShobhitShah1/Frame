import React from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { IconsPath } from "../common/AssetsPath";
import { LARGE_IMAGE } from "../common/GlobalConfig";
import CustomButton from "../components/CustomButton";
import ScreenWrapper from "../components/ScreenWrapper";
import { s } from "./style";
import useCustomNavigation from "../routes/useCustomNavigation";
import InsetShadow from "react-native-inset-shadow";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const listHeaderComponent = () => {
  return (
    <View style={s.saveListTitleHeader}>
      <Text style={s.saveListTitle}>Templates</Text>
    </View>
  );
};

const Save = () => {
  const navigation = useCustomNavigation() as any;
  const bottomTabHeight = useBottomTabBarHeight();

  const renderSaveItems = ({ item, index }: any) => {
    return (
      <View style={s.saveItemContainer}>
        <View>
          <Image source={{ uri: LARGE_IMAGE }} style={s.saveItemImage} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={[s.container]}>
      <View style={s.saveWidthWrapper}>
        <View style={s.headerContainerView}>
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

            <View style={s.saveHeaderDeleteAndSelectFlexView}>
              <CustomButton>
                <Image
                  source={IconsPath.ic_selectAll}
                  style={s.saveDeleteAndSelectIcon}
                />
              </CustomButton>
              <CustomButton>
                <Image
                  source={IconsPath.ic_delete}
                  style={s.saveDeleteAndSelectIcon}
                />
              </CustomButton>
            </View>
          </View>
        </View>

        <FlatList
          numColumns={2}
          data={Array.from({ length: 20 })}
          renderItem={renderSaveItems}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
            paddingBottom: bottomTabHeight + 75,
          }}
          ListHeaderComponent={listHeaderComponent}
          columnWrapperStyle={s.saveColumnWrapperStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default Save;
