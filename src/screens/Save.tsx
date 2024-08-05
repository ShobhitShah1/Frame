import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React, { useCallback, useMemo, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import InsetShadow from "react-native-inset-shadow";
import { IconsPath } from "../common/AssetsPath";
import { LARGE_IMAGE } from "../common/GlobalConfig";
import CustomButton from "../components/CustomButton";
import useCustomNavigation from "../routes/useCustomNavigation";
import { s } from "./style";

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
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectMode, setSelectMode] = useState<boolean>(false);

  const handleLongPress = useCallback(
    (index: number) => {
      if (!selectMode) {
        setSelectMode(true);
      }
      toggleSelection(index);
    },
    [selectMode]
  );

  const toggleSelection = useCallback((index: number) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(index)) {
        return prevSelectedItems.filter((item) => item !== index);
      } else {
        return [...prevSelectedItems, index];
      }
    });
  }, []);

  const handleSelectAll = useCallback(() => {
    if (selectedItems.length === Array.from({ length: 20 }).length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(Array.from({ length: 20 }, (_, index) => index));
    }
  }, [selectedItems]);

  const handleDelete = useCallback(() => {
    setSelectedItems([]);
    setSelectMode(false);
  }, []);

  const renderSaveItems = useCallback(
    ({ item, index }: any) => {
      const isSelected = selectedItems.includes(index);

      return (
        <CustomButton
          onLongPress={() => handleLongPress(index)}
          onPress={() => selectMode && toggleSelection(index)}
          style={[s.saveItemContainer, isSelected && s.selectedItem]}
        >
          <View>
            <Image source={{ uri: LARGE_IMAGE }} style={s.saveItemImage} />
          </View>
        </CustomButton>
      );
    },
    [selectedItems, selectMode, handleLongPress, toggleSelection]
  );

  const memoizedListHeaderComponent = useMemo(() => listHeaderComponent, []);

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
              <CustomButton onPress={handleSelectAll}>
                <Image
                  source={IconsPath.ic_selectAll}
                  style={s.saveDeleteAndSelectIcon}
                />
              </CustomButton>
              <CustomButton onPress={handleDelete}>
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
          ListHeaderComponent={memoizedListHeaderComponent}
          columnWrapperStyle={s.saveColumnWrapperStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default Save;
