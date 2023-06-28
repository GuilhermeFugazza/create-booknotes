import { useState } from "react";



import { Alert, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../components/BackButton';
import colors from "tailwindcss/colors";
import Logo from '../assets/booknoteswhite.svg';
import { Feather , MaterialIcons } from '@expo/vector-icons';

export function NoteDark() {

  const { navigate } = useNavigation()

  return (
    <View className='flex-1 bg-background pt-16'>
      <View className="w-full flex-row items-top justify-start pl-8"> 

        <BackButton />

        <Logo />

        <View className="pl-14">
          <TouchableOpacity 
            className="w-32 h-9 items-start pl-2 justify-center bg-violet-600 opacity-60 rounded-l-lg m-2"
            onPress={() => navigate('editnote')}>
            <MaterialIcons name="edit" size={28} color="white" />
          </TouchableOpacity>

          <TouchableOpacity 
            className="w-32 h-9 items-start pl-2 justify-center bg-violet-600 opacity-60 rounded-l-lg m-2"
            onPress={() => navigate('notew')}>
            <Feather name="sun" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>


      <View className="flex-row">
        <Text className="w-1/2 font-medium text-base text-white mx-8 mb-2 text-left">
          Cena linda
        </Text>
        <Text className="w-1/2 font-bold text-base text-violet-500 mx-8 mb-2 text-left">
          Pg. xx - xx
        </Text>
      </View>

      <View className='border-t border-violet-600 mt-1'></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <Text className="font-semibold text-base text-white m-8 text-justify ">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            </Text>
      </ScrollView>
    </View>
  )
}