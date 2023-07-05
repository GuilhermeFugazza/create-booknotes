import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import colors from "tailwindcss/colors";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

export function HeaderBook() {
  const { goBack } = useNavigation()
  const { navigate } = useNavigation()

  return (
    <View className="w-full flex-row items-top justify-start px-8 ">

      <View className="w-52">
        <View className="flex-row items-center bg-background py-2">

          <TouchableOpacity className="pr-32"
            activeOpacity={0.7}
            onPress={goBack}
          >
            <Ionicons
              name="ios-return-up-back-outline"
              size={32}
              color={colors.violet[500]}
            />
          </TouchableOpacity>
          <View>
            <TouchableOpacity className="w-16 h-8 items-start pl-2 justify-center bg-violet-600 opacity-60 rounded-l-lg m-2"
              activeOpacity={0.7}
              onPress={() => navigate('editbook')}
            >
              <MaterialIcons name="edit" size={28} color={colors.zinc[100]} />
            </TouchableOpacity>

            <TouchableOpacity className="w-16 h-8 items-start pl-2 justify-center bg-violet-600 opacity-60 rounded-l-lg m-2"
              activeOpacity={0.7}
              onPress={() => navigate('addbookinfolder')}
            >
              <AntDesign name="addfolder" size={24} color={colors.zinc[100]} />
            </TouchableOpacity>
          </View>
        </View>

        <Text className="font-semibold border-b py-1 border-violet-600 text-base text-white text-center">
          É assim que acaba
        </Text>

        <Text className="font text-sm pt-1 text-violet-800 text-center">
          Collen Hoover
        </Text>

      </View>

      <View className="inline-block">

        <TouchableOpacity
          className="w-28 h-40 items-center justify-center bg-gray-600 rounded-lg m-2"
          activeOpacity={1}
        >
          <Text className="font-semibold text-base text-white text-center m-1">
            Capa do  livro
          </Text>

        </TouchableOpacity>

      </View>

    </View>
  )
}