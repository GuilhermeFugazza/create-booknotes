import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";
import { FontAwesome } from '@expo/vector-icons'; 
import { Header } from "../components/Header";
import api from "../lib/axios";
import { PrismaClient } from '@prisma/client'

/*
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function BookButton() {
  const [bookDetails, setBookDetails] = useState({
    name: '',
    title: '',
    pages: '',
  });

  const handleBookDetailsChange = (fieldName: string, value: string) => {
    setBookDetails({
      ...bookDetails,
      [fieldName]: value,
    });
  };

  const handleCreateBook = async () => {
    try {
      await prisma.books.create({
        data: {
          title: bookDetails.title,
          author: bookDetails.name,
          pcompany: '', // Preencha conforme necessário
          favorite: false, // Preencha conforme necessário
        },
      });
      // Limpe os campos do formulário após a criação do livro
      setBookDetails({
        name: '',
        title: '',
        pages: '',
      });
      console.log('Livro cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar livro:', error);
    }
  };
*/

export function New() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pcompany, setPcompany] = useState('');
  
  async function CreateNewBook() {
    try {
      const response = await api.post('/book', { title, pcompany, author });
  
      if (response.status === 200) {
        // Sucesso, limpe os campos e mostre uma mensagem de sucesso
        setTitle('');
        setPcompany('');
        setAuthor('');
        Alert.alert('Novo livro adicionado', 'Livro adicionado com sucesso!');
      } else {
        // A resposta não é 200 OK, trate o erro
        console.error("Erro na resposta da API:", response.data);
        Alert.alert('Ops', 'Não foi possível adicionar o livro');
      }
    } catch (error) {
      // Erro na solicitação, exiba o erro
      console.error("Erro ao fazer a solicitação:", error);
      Alert.alert('Ops', 'Não foi possível adicionar o livro');
    }
  }

  return (
    <View className="flex-1 bg-background pt-16 pb-10">
      
        <Header />

        <Text className="w-full font-semibold text-lg text-white mx-1 text-center">
          Adicione um livro
        </Text>
        <View className='border border-violet-600 mt-1'></View>
        <View className="flex justify-center items-center px-12 pt-12 pb-10">

          <TextInput
            className="w-full h-12 pl-4 rounded-lg mt-6 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-500"
            placeholder="Título..."
            placeholderTextColor={colors.zinc[400]}
            onChangeText={setTitle}
            value={title}
          />

          <TextInput
            className=" w-full h-12 pl-4 rounded-lg mt-6 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-500"
            placeholder="Autor(a)..."
            placeholderTextColor={colors.zinc[400]}
            onChangeText={setAuthor}
            value={author}
          />

          <TextInput
            className="w-full h-12 pl-4 rounded-lg mt-6 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-500"
            placeholder="Editora..."
            placeholderTextColor={colors.zinc[400]}
            onChangeText={setPcompany}
            value={pcompany}
          />

          <TouchableOpacity
            className="w-28 h-40 items-center justify-center bg-zinc-900 rounded-lg m-6 border-2 border-zinc-800"
            activeOpacity={0.7}
            //onPress={() => navigate('photo')}
          >

            <Text className="font-semibold text-base text-zinc-400 m-1 text-center pb-3">
              Adicione uma capa para o livro
            </Text>
            <FontAwesome name="camera" size={24} color={colors.violet[500]} />
          </TouchableOpacity>

          <TouchableOpacity
            className="w-52 h-14 flex-row items-center justify-center bg-green-500 rounded-md mt-16"
            activeOpacity={0.7}
            onPress={CreateNewBook}
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

  

  
