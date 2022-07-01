import React, { useState, useContext } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import Btn from '../components/Btn';
import Input from '../components/TextInput';
import { AuthContext } from '../context/AuthContext';

const image = {
  uri: 'https://i.pinimg.com/originals/60/1c/71/601c715eee01e1faeda7ecc9ecf1677c.jpg',
};

const LoginScreen = ({ navigation }) => {

  const {login} = useContext(AuthContext)

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <View>
          
          <Input placeholder='Ingrese su nombre' />

          <Input
            placeholder='Ingrese su email'
          />

          {/* <Text style={styles.error}>{test}</Text> */}

          <Btn
            text='Iniciar Sesión'
            onPress={() => {login()}}
          />

          <Btn
            text='Registrarse'
            onPress={() => {
              navigation.navigate('Register');
            }}
          />
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
  error:{
    color:'red',
    fontWeight:'bold',
  }
});
