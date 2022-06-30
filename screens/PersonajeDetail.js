import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  FlatList,
  ScrollView
} from 'react-native';
import axios from 'axios';
import Episodios from '../components/Episodios';

const PersonajeDetail = ({ route, navigation }) => {
  const [personaje, setValores] = useState([]);

  const locationDetails = () => {
    console.log(personaje.location.url);
    navigation.navigate('LocationDetail', { url: personaje.location.url });
  };

  const { url } = route.params;

  useEffect(() => {
    const getPersonajeInfo = async () => {
      const res = await axios.get(url);
      setValores(res.data);
    };
    getPersonajeInfo();
  },[]);

  // useEffect(() => {
  //   const getPersonajeInfo = async () => {
  //     const res = await axios.get(url);
  //     let episodios_info = [];
  //     for (let i in res.data.episode) {
  //       const info = await axios.get(res.data.episode[i]);
  //       episodios_info.push(info.data);
  //     }
  //     console.log(episodios_info);
  //     setValores({
  //       ...personaje,
  //       ['personaje']: res.data,
  //       ['episodes']: episodios_info,
  //     });
  //     console.log('ep', personaje.episodes);
  //     console.log('per', personaje.personaje);
  //   };
  //   getPersonajeInfo();
  // },[]);


  const Item = ({ name }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{ name }</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={ item.name } />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.personajeContainer}>
        <View style={styles.imageContainer}>
          <Text style={styles.name}>{personaje.name}</Text>
          <Image
            source={{ uri: personaje.image }}
            style={styles.img}
          ></Image>
          <View style={styles.infoContainer}>
            <Text style={styles.text}>{personaje.species}</Text>
            <Text style={styles.text}>{personaje.type}</Text>
          </View>
           
          <TouchableHighlight onPress={locationDetails}>
            <View>
              <Text style={styles.location}>Location</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.episodesContainer}>

          {/* aca empieza lo complicado  */}
          <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.episodioTitle}>Episodios</Text>
            <Episodios episodios={personaje.episodes}></Episodios>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default PersonajeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#67dd23',
    alignItems: 'center',
    justifyContent: 'center',
  },
  personajeContainer: {
    flex: 1,
    width: '90%',
    marginVertical: 20,
    backgroundColor: '#000',
    borderRadius: 16,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height:'40%'
  },
  episodesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    width: '40%',
    height: '50%',
    borderRadius: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  location: {
    color: '#67dd23',
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationColor: '#67dd23',
  },
  item: {
    backgroundColor: '#fff',
    width: 300,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: '#000',
    borderRadius:16,
  },
  title: {
    fontSize: 32,
    color:'#000',
  },
  scroll:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    height:'90%',
    overflow:'hidden',
  },
  episodioTitle:{
    fontSize:24,
    color:'#fff',
    fontWeight: 'bold',
    marginVertical:20,
  },
  infoContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  }
});
