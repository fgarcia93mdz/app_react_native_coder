import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import { Card } from 'react-native-elements';
import { useEffect, useState } from 'react';
import Header from '../components/Header'
import HomeOwnerJson from '../data/HomeOwnerList.json'
import HomeOwner from './HomeOwnerAdd'
import ButtonTouch from '../components/ButtonTouch';

const HomeOwnerList = () => {
  const [homeOwner, setHomeOwner] = useState([])
  const [showHomeOwner, setShowHomeOwner] = useState(false);

  useEffect(() => {
    setHomeOwner(HomeOwnerJson)
  }), []

  const renderOwnerList = ({ item }) => {
    return (
      <Card>
        <Card.Title>{item.id}</Card.Title>
        <Card.Divider />
        <Text style={styles.nameOwner}>Nombre:<Text style={styles.name}> {item.name}</Text></Text>
        <Text style={styles.addressOwner}>Dirección: <Text style={styles.address}>{item.address}</Text></Text>
        <Text style={styles.phoneOwner}>Teléfono: <Text style={styles.phone}>{item.phone}</Text></Text>
      </Card>
    )
  }
  
  return (
    <>
      {showHomeOwner ? <HomeOwner /> : (
        <>
          <Header title="Listado de dueños" />
          <View>
            <Button title="Agregar dueño" onPress={() => setShowHomeOwner(true)} />
            <FlatList
              data={homeOwner}
              renderItem={renderOwnerList}
              keyExtractor={(item) => item.id}
            />
          </View>
        </>
      )}
    </>
  );
}

export default HomeOwnerList

const styles = StyleSheet.create({
  nameOwner: {
    marginBottom: 10,
    fontFamily: 'Karla-Regular',
    fontSize: 20
  },
  name: {
    marginBottom: 10,
    fontFamily: 'Karla-Bold',
    fontSize: 20
  },
  addressOwner: {
    marginBottom: 10,
    fontFamily: 'Karla-Regular',
    fontSize: 18
  },
  address: {
    fontFamily: 'Karla-Bold',
    fontSize: 18
  },
  phoneOwner: {
    marginBottom: 10,
    fontFamily: 'Karla-Regular',
    fontSize: 18
  },
  phone: {
    fontFamily: 'Karla-Bold',
    fontSize: 18
  }
})