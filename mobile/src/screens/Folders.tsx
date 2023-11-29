import React, { useCallback, useState } from 'react';
import { Text, View, ScrollView, Alert, Touchable, TouchableOpacity } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Header } from '../components/Header';
import { FolderButton } from '../components/FolderButton';
import { OptBar } from '../components/OptBar';
import { api } from '../lib/axios';

type FoldersProps = Array<{
  id: string;
  name: string;
}>

export function Folders() {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);
  const [folders, setFolders] = useState<FoldersProps | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get('/folders');
      setFolders(response.data);
      console.log(response.data);
    } catch (error) {
      Alert.alert('Ops :(', 'Não encontramos nenhuma pasta cadastrada');
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
    <View className='flex-1 bg-background pt-16 pb-12'>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <View className='flex-row flex-wrap px-1 justify-start'>
          {loading ? (
            <Text className='flex-row px-36 pt-52 w-100 h-100'>Carregando...</Text>
          ) : folders?.length ? (
            folders.map((folder) => (

              <View key={folder.id} className="pb-6">
                <MaterialIcons
                  name='folder'
                  size={128}
                  color="lightblue"
                  activeOpacity={0.7}
                  onPress={() => {
                    if (folder.id) {
                      console.log(folder.id)
                      navigate('folder');
                    }
                  }}
                />
                <Text className="w-28 font-semibold text-base text-white mx-1 text-center">
                  {folder.name}
                </Text>
              </View>
            ))
          ) : (
            <Text style={{ color: 'white', textAlign: 'center' }}>Nenhuma pasta encontrada</Text>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        className="w-1/2 h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6 ml-4"
        activeOpacity={0.7}
        onPress={() => navigate('createfolders')}
      >

        <Text className="font-semibold text-base text-white mx-2">
           Adicionar pasta
        </Text>
      </TouchableOpacity>
    </View>
  )
} 