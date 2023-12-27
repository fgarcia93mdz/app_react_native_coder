import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Dialog from "react-native-dialog";

const Card = ({ name, address, home, imageUrl, phone, family, onEdit, isVerified }) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleCirclePress = () => {
    if (isVerified) {
      setDialogMessage('Usuario verificado');
    } else {
      let missingDataMessage = 'Faltan datos: ';
      if (!name) missingDataMessage += 'nombre, ';
      if (!address) missingDataMessage += 'dirección, ';
      if (!home) missingDataMessage += 'casa, ';
      if (!phone) missingDataMessage += 'teléfono, ';
      if (!family || family === undefined) missingDataMessage += 'familia, ';
      setDialogMessage(missingDataMessage);
    }
    setDialogVisible(true);
  };

  const handleDialogClose = () => {
    setDialogVisible(false);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onEdit} style={styles.pencil}>
        <MaterialIcons name="edit" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCirclePress}>
        <View style={[styles.circle, { backgroundColor: isVerified ? 'green' : 'red' }]} />
      </TouchableOpacity>
      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Estado</Dialog.Title>
        <Dialog.Description>
          {dialogMessage}
        </Dialog.Description>
        <Dialog.Button label="Cerrar" onPress={handleDialogClose} />
      </Dialog.Container>
      <Image style={styles.image} source={imageUrl} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>Calle: {address}</Text>
        <Text style={styles.subtitle}>Casa: {home}</Text>
        <Text style={styles.subtitle}>Teléfono: {phone}</Text>
        <Text style={styles.subtitle}>Cantidad de integrantes: {family}</Text>
      </View>
      <Button title="Ver más" onPress={() => { }} />
    </View>
  );
};

const styles = StyleSheet.create({
  pencil: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  card: {
    borderRadius: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
    overflow: 'hidden',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  image: {
    width: '70%',
    height: 260,
    alignSelf: 'center',
    marginTop: 20,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
});

export default Card;