import { TouchableOpacity, Text, useState } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { PrismaClient } from '@prisma/client';

export function BookButton() {
  const { navigate } = useNavigation();
  const prisma = new PrismaClient();
  const [bookName, setBookName] = useState<string | null>(null);

  const getBookName = async (bookId: string) => {
    try {
      const book = await prisma.books.findUnique({
        where: {
          id: bookId,
        },
        select: {
          title: true,
        },
      });

      if (book) {
        setBookName(book.title); // Atualize o estado com o nome do livro
      } else {
        setBookName('Livro não encontrado'); // Atualize o estado com a mensagem de erro
      }
    } catch (error) {
      console.error('Erro ao buscar o nome do livro:', error);
      setBookName('Erro ao buscar o nome do livro'); // Atualize o estado com a mensagem de erro
    }
  };

  const handleGetBookName = async (bookId: string) => {
    await getBookName(bookId);
  };

  return (
    <TouchableOpacity
      className="w-28 h-40 items-center justify-center bg-gray-700 rounded-lg m-2"
      activeOpacity={0.7}
      onPress={() => navigate('book')} // Substitua 'bookId' pelo ID real do livro
    >
      <Text className="font-semibold text-base text-white m-1">
        {bookName || 'Capa do livro'} {/* Exibe o nome do livro ou 'Capa do livro' se o nome ainda não foi carregado */}
      </Text>
    </TouchableOpacity>
  );
}
