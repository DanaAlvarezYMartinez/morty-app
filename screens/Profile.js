import React, { useContext, useState, useEffect } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import Opcion from '../components/BloqueOpcion';
import { AuthContext } from '../context/AuthContext';
import Btn from '../components/Btn';

const image = {
  uri: 'https://i.pinimg.com/564x/07/ad/01/07ad01b520f8b9e67776680c995a236d.jpg',
};

const Profile = ({ navigation }) => {

  const { logout, userName } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <View style={styles.profileContainer}>
          <Text style={styles.userName}>¡Bienvenid@ {userName}!</Text>

          <View>
            <Opcion
              text='Ver Personajes'
              uri='https://i.pinimg.com/564x/7f/bb/89/7fbb89e5bf3235e4c2c0d4a4038acb2d.jpg'
              onPress={() => {
                navigation.navigate('PersonajesPage');
              }}
            />
            <Opcion
              text='Ver Favoritos'
              uri='https://i.pinimg.com/564x/df/b7/9d/dfb79dd89abea26401af2e9983cec454.jpg'
              onPress={() => {
                navigation.navigate('Favoritos');
              }}
            />
          </View>
          <View style={styles.btnContainer}>
            <Btn
              text='Cerrar sesion'
              onPress={() => {
                logout();
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    width: '85%',
    height: '80%',
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 20,
    opacity:0.9,
  },
  userName: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  btnContainer:{
    marginTop:30,
  }
});
