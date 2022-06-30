import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PersonajeItem = ({ navigation, personaje }) => {

    const onPressDetail = () =>{
        navigation.navigate('PersonajeDetail', { url: 'https://rickandmortyapi.com/api/character/' + personaje.id} );
    }

  return (
    <TouchableOpacity style={styles.container}
    onPress= { onPressDetail }
    >
      <Image source={{ uri: personaje.image }} style={styles.img}></Image>

      <View style={styles.row}>
        <Text style={styles.nameText}>{personaje.name}</Text>
        <Text style={styles.text}>{personaje.location.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    padding: 16,
    height: 200,
    borderRadius: 16,
    marginVertical: 5,
    borderBottomWidth: 1,
    backgroundColor: '#000',
  },
  img: {
    width: '50%',
    height: '100%',
    borderRadius:16
  },
  row: {
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
  },
  nameText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 12,
  },
});

export default PersonajeItem;
