import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import Opcion from '../components/BloqueOpcion';

const Profile = ({ navigation, route }) => {
  const { nombre } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Bienvenido {nombre}</Text>
        <Opcion text='Ver Personajes' 
        uri='https://i.pinimg.com/736x/e3/9d/a9/e39da981a8830c22f085ab1e60fa31d7.jpg'
        onPress={() => {
          navigation.navigate('Personajes')
        }} />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
