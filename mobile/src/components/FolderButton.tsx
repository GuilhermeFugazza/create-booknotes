import { TouchableOpacity, Text,View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 

export function FolderButton() {

  const { navigate } = useNavigation()

  return (
    <View className= "pb-6">
      <MaterialIcons 
        name="folder" 
        size={128} 
        color="lightblue" 
        activeOpacity={0.7}
        onPress={() => navigate('folder')}
        />
        

      <Text className="w-28 font-semibold text-base text-white mx-1 text-center">
        Nome da pasta
      </Text>
    </View>
  )
}