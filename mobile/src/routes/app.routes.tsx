import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home';
import { New } from '../screens/New';
import { Booknotes } from '../screens/Book';
import { Notes } from '../screens/CreateNotes';
import { FavBooks } from '../screens/FavBooks';
import { Folders } from '../screens/Folders';
import { Folder } from '../screens/Folder';

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="new"
        component={New}
      />

      <Screen
        name="book"
        component={Booknotes}
      />

      <Screen
        name="notes"
        component={Notes}
      />

      <Screen
        name="favbooks"
        component={FavBooks}
      />

      <Screen
        name="folders"
        component={Folders}
      />

      <Screen
        name="folder"
        component={Folder}
      />
    </Navigator>
  )
}