import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';

const Home = () => {

  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const timer = setTimeout(() => {
        navigation.navigate('LoginHome');
      }, 3000); 

      return () => clearTimeout(timer);
    }, [navigation])
  );

  return (
    <ImageBackground source={require('../../assets/images/backGround/home.png')} style={styles.image}>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default Home;