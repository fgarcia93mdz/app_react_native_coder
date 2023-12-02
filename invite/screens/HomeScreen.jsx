import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {  // Añade navigation aquí
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text1}>¡Hola coder!</Text>
        <Text style={styles.text2}>Aquí comienza una nueva aventura</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Owner')}>
        <View style={styles.boxIcon}>
            <Text style={styles.text3}>¿Vamos?</Text>
            <Icon name="rocket" marginTop={40} marginLeft={20} size={60} color="#696969" />
        </View>
          </TouchableOpacity>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 60,
  },
  text2: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
  },
  text3: {
    color: '#696969',
    fontSize: 40,
    marginTop: 40,
  },
  box: {
    width: 380,
    height: 300,
    backgroundColor: '#8fbc8f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  boxIcon: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default HomeScreen;