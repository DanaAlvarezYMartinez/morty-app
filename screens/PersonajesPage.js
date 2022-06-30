import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import Personajes from '../components/Personajes';

const PersonajesPage = ({ navigation }) => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const getPersonajes = async () => {
      const res = await axios.get('https://rickandmortyapi.com/api/character');
      console.log(res.data);
      setPersonajes(res.data.results);
    };
    getPersonajes();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#67dd23' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Personajes</Text>
        <Personajes personajes={personajes} navigation= {navigation} />
      </ScrollView>
    </View>
  );
};

export default PersonajesPage ;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#67dd23',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
