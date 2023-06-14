import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";
import { FontAwesome } from '@expo/vector-icons'; 
import { Header } from "../components/Header";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

export function EditBook() {

    const { navigate } = useNavigation()

    return (
        <View className="flex-1 bg-background pt-16 pb-10">
      
        <Header />
        <Text className="w-full font-semibold text-lg text-white mx-1 text-center">
          Edite seu livro
        </Text>
        <View className='border border-violet-600 mt-1'></View>
        <View className="flex justify-center items-center px-12 pt-12 pb-10">

          <TextInput
            className="w-full h-12 pl-4 rounded-lg mt-6 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-500"
            placeholder="Novo título..."
            placeholderTextColor={colors.zinc[400]}
          />

          <TextInput
            className=" w-full h-12 pl-4 rounded-lg mt-6 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-500"
            placeholder="Novo nome..."
            placeholderTextColor={colors.zinc[400]}
          />

          <TextInput
            className="w-full h-12 pl-4 rounded-lg mt-6 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-500"
            placeholder="Alterar o número de páginas..."
            placeholderTextColor={colors.zinc[400]}
          />

          <TouchableOpacity
            className="w-28 h-40 items-center justify-center bg-zinc-900 rounded-lg m-6 border-2 border-zinc-800"
            activeOpacity={0.7}
            //onPress={() => navigate('photo')}
          >

            <Text className="font-semibold text-base text-zinc-400 m-1 text-center pb-3">
              Mude a capa do seu livro
            </Text>
            <FontAwesome name="camera" size={24} color={colors.violet[500]} />
          </TouchableOpacity>

          <TouchableOpacity
            className="w-52 h-14 flex-row items-center justify-center bg-green-500 rounded-md mt-16"
            activeOpacity={0.7}
            //onPress={CreateNewBook}
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