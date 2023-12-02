// App.js
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import Header from './components/Header/Header';

export default function App() {
  return (
    <>
      <Header title="Mi visita" />
      <AppNavigator />
    </>
  );
}
