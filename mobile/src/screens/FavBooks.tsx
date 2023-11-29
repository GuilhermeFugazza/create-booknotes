import { useCallback, useState } from 'react';
import { Text, View, ScrollView, Alert, Touchable, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Header } from '../components/Header';
import { BookButton } from '../components/BookButton';
import { OptBar } from '../components/OptBar';

export function FavBooks() {
  const [loading] = useState(true)
  const { navigate } = useNavigation()

//  async function RemoveFromFavs () {
//    try {
//      Alert.alert('Novo livro adicionado', 'Livro adicionado com sucesso!');
//    } catch (error) {
//      console.log(error)
//      Alert.alert('Ops', 'Não foi possível adicionar o livro')
//    }
//  }

  return (
    <View className='flex-1 bg-background pt-16'>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >

        <View className='flex-row flex-wrap px-1 justify-center pt-48'>
          <Text>
            Nenhum livro favoritado...
          </Text>
        </View>
      </ScrollView>
      <OptBar />
    </View>
  )
} 