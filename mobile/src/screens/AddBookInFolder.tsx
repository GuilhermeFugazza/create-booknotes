import { useCallback, useState } from 'react';
import { Text, View, ScrollView, Alert, Touchable, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Header } from '../components/Header';
import { FolderButton } from '../components/FolderButton';
import { OptBar } from '../components/OptBar';

export function AddBookInFolder() {
  const [loading] = useState(true)
  const { navigate } = useNavigation()

  return (
    <View className='flex-1 bg-background pt-16'>
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
    </View>
  )
} 