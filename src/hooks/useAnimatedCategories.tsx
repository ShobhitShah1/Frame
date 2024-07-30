import { useEffect } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const useAnimatedCategories = () => {
  const translateY = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withTiming(translateY.value, { duration: 100 }) },
      ],
    };
  });

  useEffect(() => {
    translateY.value = -35;
  }, [translateY]);

  return { animatedStyles };
};
