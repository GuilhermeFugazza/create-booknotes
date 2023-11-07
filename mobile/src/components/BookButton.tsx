import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';


export function BookButton() {
  
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      className="w-28 h-40 items-center justify-center bg-gray-700 rounded-lg m-2"
      activeOpacity={0.7}
      onPress={() => navigate('book')} // Substitua 'bookId' pelo ID real do livro
    >
      <Text className="font-semibold text-center text-white m-1">
        Nome do livro {/* Exibe o nome do livro ou 'Capa do livro' se o nome ainda não foi carregado */}
      </Text>
    </TouchableOpacity>
  );
}
