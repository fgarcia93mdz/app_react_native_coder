import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '@components/Header';


const MenuCompany = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header title="Hola Jorge" />
      <View>
        <Button
          title="Administrar mi casa"
          //onPress={() => navigation.navigate('HomeOwnerList')}
        />
        <Button
          title="Mis visitas"
          //onPress={() => navigation.navigate('HomeOwner')}
        />
        <Button
          title="Contactar a la administración"
        //onPress={() => navigation.navigate('HomeOwner')}
        />
        <Button
          title="Denuncias y reclamos"
        //onPress={() => navigation.navigate('HomeOwner')}
        />
      </View>
    </>
  );
};

export default MenuCompany;