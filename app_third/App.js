import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import Home from './src/screens/Home';
import HomeOwner from './src/screens/HomeOwnerAdd';
import HomeOwnerList from './src/screens/HomeOwnerList';
import MenuCompany from './src/screens/MenuCompany';

const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
    'Karla-Regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Italic': require('./assets/fonts/Karla-Italic.ttf'),
    'Karla-Light': require('./assets/fonts/Karla-Light.ttf'),
  });

  if (!fontLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="MenuCompany" component={MenuCompany} options={{ headerShown: false }} />
        <Stack.Screen name="HomeOwner" component={HomeOwner} options={{ headerShown: false }} />
        <Stack.Screen name="HomeOwnerList" component={HomeOwnerList} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

