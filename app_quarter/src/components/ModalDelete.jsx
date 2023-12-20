import { StyleSheet, Modal, View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const ModalDelete = ({ modalVisible, setModalVisible, ownerToDelete, handleDelete }) => {

  return (
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
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={{ marginRight: 10, backgroundColor: 'grey', padding: 10 }} // Agrega margen a la derecha y establece el color de fondo
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleDelete(ownerToDelete.id);
                setModalVisible(!modalVisible);
              }}
              style={{ backgroundColor: 'red', padding: 10 }} // Cambia el color de fondo a rojo
            >
              <Text style={{ color: 'white' }}>Borrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalDelete

const styles = StyleSheet.create({
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
})