import { View, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 
import colors from 'tailwindcss/colors';
import { useNavigation } from "@react-navigation/native";

export function OptBar() {
  const { navigate } = useNavigation()

  return (
    <View className="w-full flex-row items-center justify-center border-t border-violet-600">

      <TouchableOpacity 
        activeOpacity={0.7}
        className="flex-row h-16 rounded-lg items-center px-12" 
        onPress={() => navigate('folders')} 
      >
        <MaterialCommunityIcons name="folder-multiple" size={30} color={colors.violet[500]} />
      </TouchableOpacity>

      <TouchableOpacity 
        activeOpacity={0.7}
        className="flex-row h-16 rounded-lg items-center px-12" 
        onPress={() => navigate('favbooks')} 
      >
        <AntDesign name="heart" size={30} color={colors.violet[500]} />
      </TouchableOpacity>

      <TouchableOpacity 
        activeOpacity={0.7}
        className="flex-row h-16 rounded-lg items-center px-12" 
        onPress={() => navigate('new')} 
      >
        <MaterialCommunityIcons name="book-plus" size={30} color={colors.violet[500]} />
      </TouchableOpacity>

    </View>
  )
}