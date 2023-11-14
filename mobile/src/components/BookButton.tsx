import { TouchableOpacity, Text, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import { api } from "../lib/axios";

type BooksProps = Array<{
  id: string;
  title: string;
  author: string;
  pcompany: string;
}>

export function BookButton() {

  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState<BooksProps | null>(null)

  async function fetchData() {
    try {
      setLoading(true);
      const response = await api.get('/books')
      setBooks(response.data)
      console.log(response.data)

    } catch (error) {
      Alert.alert('Ops   :(', 'Não encontramos nenhum livro cadastrado')
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  return (

    <TouchableOpacity
      className="w-28 h-40 items-center justify-center bg-gray-700 rounded-lg m-2"
      activeOpacity={0.7}
      onPress={() => navigate('book')} // Substitua 'bookId' pelo ID real do livro
    >
      <Text className="font-semibold text-center text-white m-1">
        teste
      </Text>
    </TouchableOpacity>
  )
}
