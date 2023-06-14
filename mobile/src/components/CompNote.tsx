import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export function CompNote() {

    const { navigate } = useNavigation()

    return (
        <TouchableOpacity 
        activeOpacity={0.7} 
        onPress={() => navigate('noted')}
        className="w-full h-50 flex-column items-center justify-center bg-gray-100 border rounded-2xl mt-6">
            <View className="w-full flex-row border-b-4 border-background mt-2 pb-2 mx-4 justify-between">
                <Text className="items-center justify-center px-4 font-medium text-base text-white ">
                    Cena linda
                </Text>
                <Text className="items-center justify-center px-4 font-semibold text-base text-violet-500 ">
                    Pg. xx - xx
                </Text>
            </View>

            <Text className="font-semibold text-base text-zinc-400 m-4 ">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            </Text>
        </TouchableOpacity>
    )
}