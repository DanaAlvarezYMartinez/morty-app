import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  Button,
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import Personajes from '../components/Personajes';
import Btn from '../components/Btn';
import { AuthContext } from '../context/AuthContext';

const PersonajesPage = ({ navigation }) => {
  const [personajes, setPersonajes] = useState([]);
  const [searchParam, setParam] = useState([]);

  const getPersonajes = async () => {
    const res = await axios.get('https://rickandmortyapi.com/api/character');
    console.log(res.data);
    setPersonajes(res.data.results);
  };

  useEffect(() => {
    getPersonajes();
  }, []);

  const { logout } = useContext(AuthContext);

  const filter = async () => {
    try {
      const res = await axios.get(
        'https://rickandmortyapi.com/api/character/?name=' + searchParam
      );
      setPersonajes(res.data.results);
    } catch (error) {
      console.log(`filter error ${error}`);
    }
  };

  const placeholder = 'Nombre...';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.title}>Personajes</Text>
        <Btn
          text='Cerrar sesion'
          onPress={() => {
            logout();
          }}
        />

        <TextInput
          style={styles.input}
          onChangeText={setParam}
          placeholder={placeholder}
          placeholderTextColor="#fff"
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={filter}>
            <Text style={{ fontSize: 10 }}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={getPersonajes}>
            <Text style={{ fontSize: 10 }}>Clear</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.personajesContainer}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Personajes personajes={personajes} navigation={navigation} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PersonajesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#67dd23',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: '#67dd23',
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#fff',
    color: '#000',
    width: 65,
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 35,
    borderColor: '#3cb1c8',
    borderWidth: 3,
    fontSize: 11,
    marginHorizontal: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 290,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 10,
    color: '#fff',
  },
  personajesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width:'100%'
  },
});
