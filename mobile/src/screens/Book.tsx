import React, { useCallback, useState } from "react";
import { Alert, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation, RouteProp } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import colors from "tailwindcss/colors";
import { AntDesign } from '@expo/vector-icons';
import { api } from '../lib/axios';

// Adicione o tipo para as propriedades da rota
type BookRouteProps = {
  route: RouteProp<{ params: { bookId: string } }, 'params'>;
};

type Note = {
  id: string;
  title: string;
  pages: string;
  note: string;
};

export function Book({ route }: BookRouteProps) {
  const { goBack, navigate } = useNavigation();
  const { bookId } = route.params;

  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    pcompany: ''
  });

  // Adicione o estado 'notes'
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchData = async () => {
    try {
      setLoading(true);

      // Obtém detalhes do livro
      const bookResponse = await api.get(`/books/${bookId}`);
      setBook(bookResponse.data);

      // Obtém notas do livro
      const notesResponse = await api.get<Note[]>(`/books/${bookId}/notes`);
      setNotes(notesResponse.data);

      console.log(bookResponse.data);
      console.log(notesResponse.data);
    } catch (error) {
      Alert.alert('Ops :(', 'Não foi possível carregar as informações do livro');
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
    <View className="flex-1 bg-background pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
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
              {book.title}
            </Text>

            <Text className="font text-sm pt-1 text-violet-800 text-center">
              {book.author}
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
        <View className="px-8">
          {notes.map((note) => (
            <TouchableOpacity
              key={note.id}
              activeOpacity={0.7}
              onPress={() => navigate('noted', note.id )}
              className="w-full h-50 flex-column items-center justify-center bg-zinc-800 border rounded-2xl mt-6"
            >
              <View className="w-full flex-row border-b-4 border-background mt-2 pb-2 mx-4 justify-between">
                <Text className="items-center justify-center px-4 font-medium text-base text-white ">
                  {note.title}
                </Text>
                <Text className="items-center justify-center px-4 font-semibold text-base text-violet-500 ">
                  Pg. {note.pages}
                </Text>
              </View>

              <Text className="font-semibold text-base text-zinc-400 m-4 ">
                {note.note}
              </Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            className="w-1/2 h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
            activeOpacity={0.7}
            onPress={() => navigate('createnotes', { bookId: book.id })}
          >

            <Text className="font-semibold text-base text-white mx-2">
              Criar uma anotação
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}