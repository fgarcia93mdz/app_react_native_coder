import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '@components/Header';

const VisitCard = ({ visit, toggleVisitStatus }) => (
  <View style={styles.visitCard}>
    <Text>{visit.name}</Text>
    <Text>{visit.lastName}</Text>
    <Text>{visit.phone}</Text>
    <Text>{visit.code}</Text>
    <Text>{visit.domain}</Text>
    <Text>{visit.date_entry}</Text>
    <Button
      title={visit.isActive ? 'Activa' : 'Cancelada'}
      color={visit.isActive ? 'green' : 'red'}
      onPress={toggleVisitStatus}
    />
  </View>
);

const VisitList = ({route}) => {
  const [visits, setVisits] = useState([
    {
      id: '1',
      name: 'Franco',
      lastName: 'Garcia',
      phone: '123456789',
      code: '1234',
      domain: 'www.google.com',
      date_entry: '2021-08-10',
      isActive: true,
    },
    {
      id: '2',
      name: 'Franco',
      lastName: 'Garcia',
      phone: '123456789',
      code: '1234',
      domain: 'www.google.com',
      date_entry: '2021-08-10',
      isActive: false,
    },
  ]);

  const toggleVisitStatus = useCallback((id) => {
    setVisits(visits.map(visit =>
      visit.id === id ? { ...visit, isActive: !visit.isActive } : visit
    ));
  }, [visits, setVisits]);

  const [isFormVisible, setFormVisible] = useState(false);
  const [newVisit, setNewVisit] = useState({
    name: '',
    lastName: '',
    phone: '',
    code: '',
    domain: '',
  });

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const generateCode = () => {
    return Math.random().toString(26).substring(2, 10).toLowerCase();
  };

  useEffect(() => {
    if (isFormVisible) {
      handleInputChange('code', generateCode());
    }
  }, [isFormVisible]);

  const handleInputChange = (name, value) => {
    if (name === 'phone') {
      const regex = /^[0-9]*$/;
      if (!regex.test(value)) {
        alert('El teléfono solo puede contener números');
        return;
      }
    } else if (name === 'domain') {
      const regex = /^[a-zA-Z0-9]*$/;
      if (!regex.test(value)) {
        alert('El dominio solo puede contener letras y números');
        return;
      }
    }

    if (name === 'name' || name === 'lastName') {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    } else if (name === 'domain') {
      value = value.toUpperCase();
    }

    setNewVisit({ ...newVisit, [name]: value });
  };

  const addVisit = () => {
    const visitToAdd = {
      id: Math.random().toString(),
      date_entry: new Date().toISOString().split('T')[0],
      isActive: true,
      ...newVisit,
    };

    setVisits((currentVisits) => [...currentVisits, visitToAdd].sort((a, b) => new Date(b.date_entry) - new Date(a.date_entry)));
    setNewVisit({ name: '', lastName: '', phone: '', code: '', domain: '' });
    setFormVisible(false);
  };

  const cancelAddVisit = () => {
    setFormVisible(false);
  };

  const routeTitle = route.params ? route.params.title : 'Mis visitas';

  const renderVisit = useCallback(({ item }) => (
    <VisitCard visit={item} toggleVisitStatus={() => toggleVisitStatus(item.id)} />
  ), [toggleVisitStatus]);

  return (
    <>
      <Header title={routeTitle} />
      <Button title="Registrar nueva visita" onPress={toggleFormVisibility} />
      {isFormVisible && (
        <View style={styles.containerInput}>
          <TextInput
            placeholder="Nombre"
            value={newVisit.name}
            onChangeText={(value) => handleInputChange('name', value)}
          />
          <TextInput
            placeholder="Apellido"
            value={newVisit.lastName}
            onChangeText={(value) => handleInputChange('lastName', value)}
          />
          <TextInput
            placeholder="Teléfono"
            value={newVisit.phone}
            onChangeText={(value) => handleInputChange('phone', value)}
          />
          <TextInput
            placeholder="Código"
            value={newVisit.code}
            onChangeText={(value) => handleInputChange('code', value)}
          />
          <TextInput
            placeholder="Dominio del vehículo"
            value={newVisit.domain}
            onChangeText={(value) => handleInputChange('domain', value)}
          />
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={addVisit}>
            <Text style={styles.buttonText}>Agregar visita</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={cancelAddVisit}>
            <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            </View>
        </View>
      )}
      <View>
        <FlatList
          data={visits}
          keyExtractor={(item) => item.id}
          renderItem={renderVisit}
          initialNumToRender={10}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '40%'
    
  },
  cancelButton: {
    backgroundColor: 'red',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '40%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  visitCard: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  containerInput: {
    margin: 10
  }
});

export default VisitList;