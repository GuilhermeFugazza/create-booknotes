import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import colors from "tailwindcss/colors";
import { useNavigation } from "@react-navigation/native";

export function BackButton() {
  const { goBack } = useNavigation()

  return (
    <TouchableOpacity 
      className="pr-16 border-4 border-transparent"
      activeOpacity={0.7}
      onPress={goBack}
    >

      <Ionicons 
        name="ios-return-up-back-outline"
        size={32}
        color={colors.violet[500]}
      />

    </TouchableOpacity>

  )
}