import { useCallback, useState } from "react";
import { Alert, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { RouteProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { BackButton } from '../components/BackButton';
import colors from "tailwindcss/colors";
import Logo from '../assets/logoblack.svg';
import { Feather , MaterialIcons } from '@expo/vector-icons';
import { api } from '../lib/axios';


type BookRouteProps = {
  route: RouteProp<{ params: { bookId: string } }, 'params'>;
};

type Note = {
  id: string;
  title: string;
  pages: string;
  note: string;
};

export function NoteWhite({ route }: BookRouteProps) {
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
    <View className='flex-1 bg-white pt-16'>
      <View className="w-full flex-row items-top justify-start pl-8"> 

        <BackButton />

        <View className="pl-14">
          <Logo />
        </View>

        <View className="pl-12">
          <TouchableOpacity 
            className="w-32 h-9 items-start pl-2 justify-center bg-violet-600 opacity-60 rounded-l-lg m-2"
            onPress={() => navigate('editnote')}>
            <MaterialIcons name="edit" size={28} color={colors.black} />
          </TouchableOpacity>

          <TouchableOpacity 
            className="w-32 h-9 items-start pl-2 justify-center bg-violet-600 opacity-60 rounded-l-lg m-2"
            onPress={() => navigate('noted')}>
            <Feather name="sun" size={24} color={colors.black} />
          </TouchableOpacity>
        </View>
      </View>


      <View className="flex-row">
        <Text className="w-1/2 font-medium text-base text-background mx-8 mb-2 text-left">
          Cena liRolando abaixo
        </Text>
        <Text className="w-1/2 font-bold text-base text-violet-500 mx-8 mb-2 text-left">
          Pg. 250 - 251
        </Text>
      </View>

      <View className='border-t border-violet-600 mt-1'></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <Text className="font-semibold text-base text-background m-8 text-justify ">
          Você caiu da escada — diz ele. — Está machucada.            
        </Text>
      </ScrollView>
    </View>
  )
}