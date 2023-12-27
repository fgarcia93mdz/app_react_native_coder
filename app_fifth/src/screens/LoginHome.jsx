import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import FadeInText from '@components/FadeInText';

const LoginHome = ({ navigation }) => {
  return (
    <>
      <View style={styles.fadeInText}>
        <FadeInText />
      </View>
      <View style={styles.containerSubText}>
        <Text style={styles.tittleSubText}>Gestor de administración del barrio</Text>
        <Text style={styles.SubText}>Las Magnolias</Text>
      </View>
      <View style={styles.container}>
        <Button
          title="Administración"
          onPress={() => navigation.navigate('MenuCompany')}
        />
        <Button
          title="Dueños"
          onPress={() => navigation.navigate('MenuOwner')}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fadeInText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSubText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tittleSubText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  SubText: {
    fontSize: 20,
    marginTop: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default LoginHome;