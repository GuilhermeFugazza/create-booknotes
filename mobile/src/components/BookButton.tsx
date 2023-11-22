import { TouchableOpacity, Text, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";
import { api } from "../lib/axios";

type BooksProps = Array<{
  id: string;
  title: string;
  author: string;
  pcompany: string;
}>

export function BookButton() {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<BooksProps | null>(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await api.get('/books');
      setBooks(response.data);
      console.log(response.data);
    } catch (error) {
      Alert.alert('Ops :(', 'Não encontramos nenhum livro cadastrado');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); 
  return (

    <TouchableOpacity
      className="w-28 h-40 items-center justify-center bg-gray-700 rounded-lg m-2"
      activeOpacity={0.7}
      onPress={() => navigate('book')} // Substitua 'bookId' pelo ID real do livro
    >
      {loading ? (
        <Text style={{ color: 'white', textAlign: 'center' }}>Carregando...</Text>
      ) : books?.length ? (
        <Text style={{ color: 'white', textAlign: 'center' }}>{books[1].title}</Text>
      ) : (
        <Text style={{ color: 'white', textAlign: 'center' }}>Nenhum livro encontrado</Text>
      )}
    </TouchableOpacity>
  )
}
