import { useState } from "react";
import { Alert, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { HeaderBook } from "../components/HeaderBook";
import { CompNote } from "../components/CompNote";
import { useNavigation } from '@react-navigation/native';

export function Booknotes() {

  const { navigate } = useNavigation()

  return (
    <View className="flex-1 bg-background pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <HeaderBook />
        <View className="px-8">
          <CompNote />
          <CompNote />
          <CompNote />
          <CompNote />

          <TouchableOpacity
            className="w-1/2 h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6"
            activeOpacity={0.7}
            onPress={() => navigate('notes')}
          >

            <Text className="font-semibold text-base text-white mx-2">
              Criar uma anotação
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}