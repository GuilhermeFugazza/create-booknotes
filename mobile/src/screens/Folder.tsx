import { useCallback, useState } from 'react';
import { Text, View, ScrollView, Alert, Touchable, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Header } from '../components/Header';
import { BookButton } from '../components/BookButton';
import { OptBar } from '../components/OptBar';

export function Folder() {
  const { navigate } = useNavigation()

  return (
    <View className='flex-1 bg-background pt-16'>
      <Header />

      <Text className="w-full font-semibold text-lg text-white mx-1 text-center">
        Nome da pasta
      </Text>
      <View className='border-t border-violet-600 mt-1'></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >

        <View className='flex-row flex-wrap px-1 mt-8 justify-start'>

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