import { Alert, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { BackButton } from "../components/BackButton";
import { useNavigation } from '@react-navigation/native';

export function CreateNotes() {

    const { navigate } = useNavigation()

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <BackButton />

                <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
                    "Nome do livro"
                </Text>
            </ScrollView>
        </View>
    )
}