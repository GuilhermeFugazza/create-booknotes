import { View, TouchableOpacity, Text } from "react-native";
import Logo from '../assets/booknoteswhite.svg';
import { BackButton } from '../components/BackButton';

export function Header() {

  return (
    <View className="w-full flex-row items-top justify-start px-9">
      <BackButton/>
      <Logo />
    </View>
  )
}