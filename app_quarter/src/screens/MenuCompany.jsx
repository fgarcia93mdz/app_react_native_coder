import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';


const MenuCompany = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header title="Menú del barrio" />
      <View>
        <Button
          title="Ir a Listado de dueños"
          onPress={() => navigation.navigate('HomeOwnerList')}
        />
        <Button
          title="Crear nuevo dueño"
          onPress={() => navigation.navigate('HomeOwner')}
        />
      </View>
    </>
  );
};

export default MenuCompany;