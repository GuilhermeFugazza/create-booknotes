import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home';
import { New } from '../screens/CreateBooks';
import { Booknotes } from '../screens/Book';
import { FavBooks } from '../screens/FavBooks';
import { Folders } from '../screens/Folders';
import { Folder } from '../screens/Folder';
import { NoteDark } from '../screens/NoteDark';
import { NoteWhite } from '../screens/NoteWhite';
import { CreateNotes } from '../screens/CreateNotes';
import { EditBook } from '../screens/EditBook';
import { EditNote } from '../screens/EditNote';
import { CreateFolders } from '../screens/CreateFolders';
<<<<<<< HEAD
import { EditFolder } from '../screens/EditFolder';
import { AddBookInFolder } from '../screens/AddBookInFolder';

=======
import { ColorPickerScreen } from '../screens/ColorPickerScreen';
>>>>>>> 0e4f46b757a315255ced91f3f969036291fb7c9f

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

      <Screen
        name="noted"
        component={NoteDark}
      />

      <Screen
        name="notew"
        component={NoteWhite}
      />

      <Screen
        name="createnotes"
        component={CreateNotes}
      />

      <Screen
        name="editbook"
        component={EditBook}
      />

      <Screen
        name="editnote"
        component={EditNote}
      />

      <Screen
        name="createfolders"
        component={CreateFolders}
      />

      <Screen
<<<<<<< HEAD
        name="editfolder"
        component={EditFolder}
      />

      <Screen
        name="addbookinfolder"
        component={AddBookInFolder}
      />
=======
        name="colorpickerscreen"
        component={ColorPickerScreen}
      />

>>>>>>> 0e4f46b757a315255ced91f3f969036291fb7c9f
    </Navigator>
  )
}