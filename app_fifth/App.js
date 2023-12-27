import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import Home from '@screens/Home';
import HomeOwner from '@screens/HomeOwnerAdd';
import HomeOwnerList from '@screens/HomeOwnerList';
import MenuCompany from '@screens/MenuCompany';
import MenuOwner from '@screens/MenuOwner';
import LoginHome from '@screens/LoginHome';
import OwnerDataScreen from '@screens/OwnerDataScreen';

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
        <Stack.Screen name="LoginHome" component={LoginHome} options={{ headerShown: false }} />
        <Stack.Screen name="MenuOwner" component={MenuOwner} options={{ headerShown: false }} />
        <Stack.Screen name="OwnerDataScreen" component={OwnerDataScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

