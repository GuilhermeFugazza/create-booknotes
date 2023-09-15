import { View, TouchableOpacity, Text } from "react-native";
import Logo from '../assets/booknoteswhite.svg';
import { BackButton } from "./BackButton";
import { Feather , MaterialIcons } from '@expo/vector-icons';
import colors from "tailwindcss/colors";
import { useNavigation } from "@react-navigation/native";

export function HeaderNote() {

  const { navigate } = useNavigation()

  return (
    <View className="w-full flex-row items-top justify-start pl-8"> 

      <BackButton />

      <View className="pl-14">
        <TouchableOpacity className="w-32 h-9 items-start pl-2 justify-center bg-violet-600 opacity-60 rounded-l-lg m-2">
          <MaterialIcons name="edit" size={28} color={colors.zinc[100]} />
        </TouchableOpacity>

        <TouchableOpacity 
          className="w-32 h-9 items-start pl-2 justify-center bg-violet-600 opacity-60 rounded-l-lg m-2"
          onPress={() => navigate('notew')}>
          <Feather name="sun" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}