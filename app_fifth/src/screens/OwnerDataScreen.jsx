import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardUser from '@components/CardUser';
import ImgProfile from '@assets/images/userProfile/descarga.png';
import Header from '@components/Header';

const OwnerDataScreen = ({ route }) => {
  const ownerData = { name: 'Franco Garcia', address: 'A', home: "26", phone: "123456789", family: "4" };

  const routeTitle = route.params ? route.params.title : 'Mi Casa';

  return (
    <>
      <Header title={routeTitle} />
    <View style={styles.container}>
      <CardUser
        name={ownerData.name}
        address={ownerData.address}
        home={ownerData.home}
        imageUrl={ImgProfile}
        phone={ownerData.phone}
        family={ownerData.family}
        isVerified={true}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
});

export default OwnerDataScreen;