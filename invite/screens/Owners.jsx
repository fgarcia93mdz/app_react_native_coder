import React, { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    //backgroundColor: '#C5E9FF',
    alignItems: 'center',
    justifyContent: 'start',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: 135,
    padding: 10,
    marginBottom: 10
  },
  buttonSend: {
    color: 'red',
    padding: 10,
    width: 400,
    textAlign: 'center'
  },
  buttonClear: {
    color: 'red',
    padding: 10,
    width: 400,
    textAlign: 'center',
    backgroundColor: 'red'
  },
  touchableOpacity: {
    padding: 10, marginLeft: 10,
  },
  viewIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: 'red'
  },
  itemText: {
    color: '#333',
  },
  deleteButton: {
    borderRadius: 5,
    backgroundColor: 'red',
    padding: 5,
  },
  checkButton: {
    borderRadius: 5,
    backgroundColor: 'green',
    padding: 5,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    color: 'red',
  },
  modalTextSub: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center"
  },
});

export default function App() {
  const [owner, setOwner] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [allOwners, setAllOwners] = useState([]);
  const [ownerToDelete, setOwnerToDelete] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const id_random = Math.floor(Math.random() * 1000000);


  const handlePress = () => {
    setAllOwners(prevState => [...prevState, { id: id_random, owner: owner, address: address, phone: phone }]);
    setOwner('');
    setAddress('');
    setPhone('');
  };

  const handleDelete = (id) => {
    setAllOwners(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const handleOwnerChange = (text) => {
    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
    setOwner(capitalizedText);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <TextInput
          placeholder='Ingrese Dueño'
          style={styles.textInput}
          value={owner}
          onChangeText={handleOwnerChange}
        />
        <TextInput
          placeholder='Ingrese Dirección'
          style={styles.textInput}
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          placeholder='Ingrese Teléfono'
          style={styles.textInput}
          value={phone}
          onChangeText={setPhone}
          keyboardType='numeric'
        />
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={handlePress}
        >
          <View style={styles.viewIcon}>
            <Icon name="plus" size={30} color="#000" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <FlatList
          data={allOwners}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
              <Text style={styles.itemText}>{item.id}</Text>
              <Text style={styles.itemText}>{item.address}</Text>
              <Text style={styles.itemText}>{item.owner}</Text>
              <Text style={styles.itemText}>{item.phone}</Text>
              <TouchableOpacity style={styles.checkButton} onPress={() => {
                setAllOwners(allOwners.map(owner => {
                  if (owner.id === item.id) {
                    return { ...owner, color: '#abc' };
                  } else {
                    return owner;
                  }
                }));
              }} >
                <Icon name="check" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => { setOwnerToDelete(item); setModalVisible(true); }}
              >
                <Icon name="trash" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          // numColumns={1}
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Listado de Dueños del barrio</Text>
            </View>
          }
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                ¿Estás seguro de que quieres borrar a {ownerToDelete ? ownerToDelete.owner : ''}?
              </Text>
              <Text style={styles.modalTextSub}>
                Le avisaremos que ya no es bienvenido en el barrio.
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  onPress={() => {
                    handleDelete(ownerToDelete.id);
                    setModalVisible(!modalVisible);
                  }}
                  textColor='red'
                >
                  Borrar
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}


