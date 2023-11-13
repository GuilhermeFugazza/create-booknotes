import { useCallback, useState, useEffect } from 'react';
import { Text, View, ScrollView, Alert, Touchable, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Logo from '../assets/booknoteswhite.svg';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import { BookButton } from '../components/BookButton';
import { OptBar } from '../components/OptBar';
import { api } from '../lib/axios';

export function Home() {
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState(null)

  const { navigate } = useNavigation()

  async function fetchData() {
    try {
      setLoading(true);
      const response = await api.get('/bookss')
      setBooks(response.data)
      console.log(response.data)

    } catch (error) {
      Alert.alert('Ops   :(', 'Não encontramos nenhum livro cadastrado')
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View className='flex-1 bg-background pt-16'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className='w-full flex-row items-top justify-center px-8'>
          <Logo />
        </View>
        <View className='flex-row flex-wrap px-1 justify-center'>

          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />
          <BookButton />

        </View>
      </ScrollView>
      <OptBar />
    </View>
  )
} 