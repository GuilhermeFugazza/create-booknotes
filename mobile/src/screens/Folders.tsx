import { useCallback, useState } from 'react';
import { Text, View, ScrollView, Alert, Touchable, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Header } from '../components/Header';
import { FolderButton } from '../components/FolderButton';
import { OptBar } from '../components/OptBar';

export function Folders() {
  const [loading] = useState(true)
  const { navigate } = useNavigation()

  return (
    <View className='flex-1 bg-background pt-16 pb-12'>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >

        <View className='flex-row flex-wrap px-1 justify-start'>

          <FolderButton />
          <FolderButton />
          <FolderButton />
          <FolderButton />

        </View>
      </ScrollView>
      <TouchableOpacity
            className="w-1/2 h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6 ml-4"
            activeOpacity={0.7}
            onPress={() => navigate('createfolders')}
          >

            <Text className="font-semibold text-base text-white mx-2">
              Criar uma pasta
            </Text>
          </TouchableOpacity>
    </View>
  )
} 