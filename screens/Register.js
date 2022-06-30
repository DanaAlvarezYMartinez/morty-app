import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Register = ({ navigation, route }) => {


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Registrarse</Text>
      </View>
       
    </SafeAreaView>
  );
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
