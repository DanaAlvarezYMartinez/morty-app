import React, { useState, useContext, useEffect } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Btn from '../components/Btn';
import { AuthContext } from '../context/AuthContext';

const image = {
  uri: 'https://i.pinimg.com/564x/43/61/a8/4361a8b8912494b922a475923ef582fd.jpg',
};

const LoginScreen = () => {
  const { login } = useContext(AuthContext);

  const [inputName, setInputName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');


  const validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setError('¡Email no valido!');
    } else {
      login(inputName);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setInputName}
            placeholder='Ingrese su nombre'
            placeholderTextColor='#000'
          />

          <TextInput
            style={styles.input}
            placeholder='Ingrese su email'
            onChangeText={setEmail}
            placeholderTextColor='#000'
          />

          <Text style={styles.error}>{error}</Text>

          <Btn text='Iniciar Sesión' onPress={validateEmail} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    width: 230,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 10,
    color: '#000',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    padding: 10,
    opacity: 0.9,
  },
});
