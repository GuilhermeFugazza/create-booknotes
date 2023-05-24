import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export function BookButton() {

  const { navigate } = useNavigation()

  return (
    <TouchableOpacity
          className="w-28 h-40 items-center justify-center bg-gray-300 rounded-lg m-2"
          activeOpacity={0.7}
          onPress={() => navigate('book')}
        >

          <Text className="font-semibold text-base text-white m-1">
            Capa do livro
          </Text>
        </TouchableOpacity>

  )
}