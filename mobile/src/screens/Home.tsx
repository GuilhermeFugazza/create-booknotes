import { useCallback, useState, useEffect } from 'react';
import { Text, View, ScrollView, Alert, Touchable, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Logo from '../assets/booknoteswhite.svg';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import { BookButton } from '../components/BookButton';
import { OptBar } from '../components/OptBar';
import { api } from '../lib/axios';

type BooksProps = Array<{
  id: string;
  title: string;
  author: string;
  pcompany: string;
}>

export function Home() {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState<BooksProps | null>(null);

  const fetchData = async () => {
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
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );


  return (
    <View className='flex-1 bg-background pt-16 justify-center'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className='w-full flex-row items-top justify-center px-8'>
          <Logo />
        </View>
        <View className='flex-row flex-wrap px-1 justify-start'>
          {loading ? (
            <Text style={{ color: 'white', textAlign: 'center' }}>Carregando...</Text>
          ) : books?.length ? (
            books.map((book) => (
              <TouchableOpacity
                key={book.id}
                className="w-28 h-40 items-center justify-center bg-gray-700 m-2 rounded-lg px-2"
                activeOpacity={0.7}
                onPress={() => navigate('book', { bookId: book.id })}
              >
                <Text style={{ color: 'white', textAlign: 'center' }}>{book.title}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={{ color: 'white', textAlign: 'center' }}>Nenhum livro encontrado</Text>
          )}
        </View>

      </ScrollView>
      <OptBar />
    </View>
  )
} 