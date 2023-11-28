import React, { useCallback, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from "tailwindcss/colors";
import { Header } from "../components/Header";
import { RouteProp, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { api } from "../lib/axios";


export function CreateNotes() {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [pages, setPages] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  const bookId = '64ec024e-5977-49a6-8b10-d4ac8da70925';


  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    pcompany: ''
  });

  const fetchData = async () => {
    try {

      // Obtém detalhes do livro
      const bookResponse = await api.get(`/books/${bookId}`);
      setBook(bookResponse.data);

      console.log(bookResponse.data);
    } catch (error) {
      Alert.alert('Ops :(', 'Não foi possível carregar as informações do livro');
      console.log(error);''
    } finally {
      setLoading(false);
    }
  };

  async function createNewNote() {
    try {
      const response = await api.post(`/books/${bookId}/notes`, { title, note, pages });

      if (response.status === 200) {
        setTitle('');
        setNote('');
        setPages('');

        Alert.alert('Nova anotação ;)', 'Anotação adicionada com sucesso!');
        console.log('bookId:', bookId);

        // Navegue para a tela desejada após adicionar a nota
        navigation.navigate('book');
      } else {
        console.error("Erro na resposta da API:", response.data);
        Alert.alert('Ops :(', 'Não foi possível adicionar a anotação');
        console.log('bookId:', bookId);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'Não foi possível criar a anotação');
      console.log('bookId:', bookId);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

    return (
        <View className="flex-1 bg-background pt-16 pb-10">
      
        <Header />
        <Text className="w-full font-semibold text-lg text-white mx-1 text-center">
        Crie sua anotação
        </Text>
        <View className='border border-violet-600 mt-1'></View>
        <View className="flex justify-center items-center px-12 pt-12 pb-10">

          <TextInput
            className="w-full h-12 pl-4 rounded-lg mt-6 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-500"
            placeholder="Título..."
            placeholderTextColor={colors.zinc[400]}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />

          <TextInput
            className="w-full h-12 pl-4 rounded-lg mt-6 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-500"
            placeholder="Texto..."
            placeholderTextColor={colors.zinc[400]}
            value={note}
            onChangeText={(text) => setNote(text)}
          />

          <TextInput
            className="w-full h-12 pl-4 rounded-lg mt-6 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-500"
            placeholder="Página... Ex: 1 - 2"
            placeholderTextColor={colors.zinc[400]}
            value={pages}
            onChangeText={(text) => setPages(text)}
          />


          <TouchableOpacity
            className="w-52 h-14 flex-row items-center justify-center bg-green-500 rounded-md mt-16"
            activeOpacity={0.7}
            onPress={createNewNote}
          >
            <Feather
              name="check"
              size={20}
              color={colors.white}
            />

            <Text className="font-semibold text-base text-white ml-2 ">
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>
    </View>
    )
}