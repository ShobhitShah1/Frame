import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../config/Interface";

export default function useCustomNavigation() {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
}
