import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';
import { EvilIcons, Entypo } from '@expo/vector-icons';

const Search = ({ onSearchHandlerEvent }) => {
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onChangeText = (inputText) => {
    const isValid = /^[a-zA-Z0-9]*$/.test(inputText);

    if (isValid) {
      setText(inputText);
      setErrorMessage('');
      onSearchHandlerEvent(inputText); 
    } else {
      setErrorMessage('Solo se admiten números y letras');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
  };

  const clearText = () => {
    setText('');
    onSearchHandlerEvent('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar..."
        onChangeText={onChangeText}
        defaultValue={text}
        value={text}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TouchableOpacity style={styles.searchIcon} onPress={() => onSearchHandlerEvent(text)}>
        <EvilIcons name="search" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={clearText}>
        <Entypo name="cross" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  error: {
    color: 'red',
    position: 'absolute', 
    top: 80, 
    left: 60, 
  },
  searchIcon: {
    position: 'absolute', 
    left: 275, 
    top: 40, 
  },
});