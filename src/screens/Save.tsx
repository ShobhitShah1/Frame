import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { IconsPath } from "../common/AssetsPath";
import { LARGE_IMAGE } from "../common/GlobalConfig";
import CustomButton from "../components/CustomButton";
import ScreenWrapper from "../components/ScreenWrapper";
import { s } from "./style";

const listHeaderComponent = () => {
  return (
    <View style={s.saveListTitleHeader}>
      <Text style={s.saveListTitle}>Templates</Text>
    </View>
  );
};

const Save = () => {
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
    <ScreenWrapper>
      <View style={s.saveWidthWrapper}>
        <View style={s.headerContainerView}>
          <View style={s.saveHeaderFlexView}>
            <CustomButton style={s.saveMenuIconView}>
              <Image source={IconsPath.ic_menu} style={s.saveIcons} />
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
          data={[1, 2, 3, 4, 5]}
          renderItem={renderSaveItems}
          contentContainerStyle={{ gap: 10 }}
          ListHeaderComponent={listHeaderComponent}
          columnWrapperStyle={s.saveColumnWrapperStyle}
        />
      </View>
    </ScreenWrapper>
  );
};

export default Save;
