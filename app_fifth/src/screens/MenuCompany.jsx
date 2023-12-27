import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '@components/Header';


const MenuCompany = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header title="Administración barrio" />
      <View>
        <Button
          title="Ir a Listado de dueños"
          onPress={() => navigation.navigate('HomeOwnerList')}
        />
        <Button
          title="Crear nuevo dueño"
          onPress={() => navigation.navigate('HomeOwner')}
        />
        <Button
          title="Visitas"
          //onPress={() => navigation.navigate('HomeOwner')}
        />
        <Button
          title="Expensas"
        //onPress={() => navigation.navigate('HomeOwner')}
        />
        <Button
          title="Denuncias"
        //onPress={() => navigation.navigate('HomeOwner')}
        />
        <Button
          title="Chat con dueños"
        //onPress={() => navigation.navigate('HomeOwner')}
        />
      </View>
    </>
  );
};

export default MenuCompany;