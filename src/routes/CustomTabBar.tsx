import { BlurView } from "@react-native-community/blur";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { IconsPath } from "../common/AssetsPath";

type CustomTabBarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

const CustomTabBar: React.FC<CustomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const handlePress = (routeName: string) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        let source;
        switch (route.name) {
          case "Home":
            source = IconsPath.ic_home;
            break;
          case "Market":
            source = IconsPath.ic_market;
            break;
          case "Save":
            source = IconsPath.ic_save;
            break;
        }

        const animatedStyle = useAnimatedStyle(() => {
          return {
            top: withTiming(isFocused ? -15 : 0),
            transform: [
              {
                translateY: withSpring(isFocused ? -4 : 0),
              },
            ],
            opacity: withTiming(isFocused ? 1 : 0.6, { duration: 600 }),
          };
        });

        return (
          <BlurView
            blurAmount={10}
            blurType="light"
            overlayColor="transparent"
            style={styles.blurView}
          >
            <TouchableOpacity
              key={index}
              style={styles.tab}
              activeOpacity={0.8}
              onPress={() => handlePress(route.name)}
            >
              <Animated.View
                style={[
                  styles.tabBackground,
                  {
                    borderColor: isFocused ? "white" : "transparent",
                    backgroundColor: isFocused ? "white" : "transparent",
                  },
                  animatedStyle,
                ]}
              >
                <Image source={source} style={styles.icon} resizeMode="cover" />
              </Animated.View>
            </TouchableOpacity>
          </BlurView>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  blurView: {
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "visible",
    backgroundColor: "yellow",
  },
  tabBar: {
    overflow: "visible",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabBackground: {
    padding: 8,
    borderWidth: 5,
    borderRadius: 100,
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "center",
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default CustomTabBar;
