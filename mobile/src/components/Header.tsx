import { View, TouchableOpacity, Text } from "react-native";
import Logo from '../assets/booknoteswhite.svg';
import { BackButton } from "./BackButton";

export function Header() {

  return (
    <View className="w-full flex-row items-top justify-start px-9">
      <View className="w-1/3 flex-row items-top justify-start">      
        <BackButton />
      </View>

      <View className="w-full flex-row items-top justify-start">
        <Logo />
      </View>
    </View>
  )
}