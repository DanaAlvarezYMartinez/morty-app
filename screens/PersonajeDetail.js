import React, { useState, useEffect, useContext } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  ScrollView,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import List from '../components/List';
import Heart from '../components/Heart';
import { FavContext } from '../context/FavContext';

const image = {
  uri: 'https://i.pinimg.com/564x/07/ad/01/07ad01b520f8b9e67776680c995a236d.jpg',
};

const PersonajeDetail = ({ route, navigation }) => {
  const { url } = route.params;
  const [episodes, setEpisodes] = useState([]);
  const [personaje, setPersonaje] = useState([]);
  const [isFav, setIsFav] = useState(false);
  const [color, setColor] = useState('#fff');


  const { addFavorite , deleteFavorite , favorites } = useContext(FavContext);

  

  useEffect(() => {
    // this is to keep consistent the color of the heart emoji
    const checkFav = async (id) =>{
      for (const fav of favorites){
        if(id === fav.id){
          setIsFav(true);
          setColor('red');
        }
      }
    };
    // here i get the important info
    let promises = [];
    const getPersonajeInfo = async () => {
      const res = await axios.get(url);
      checkFav(res.data.id);
      setPersonaje(res.data);
      for (const url2 of res.data.episode) {
        promises.push(
          axios.get(url2).then((r) => {
            setEpisodes((episodes) => [...episodes, r.data]);
          })
        );
      }
    };
    Promise.all(promises).then(() => {
      console.log('success');
    });
    getPersonajeInfo();
  }, []);

  const locationDetails = () => {
    navigation.navigate('LocationDetail', { url: personaje.location.url });
  };

  const toggleFav = () => {
    if(isFav){
      setIsFav(false)
      setColor('#fff');
      deleteFavorite(personaje);
    }else{
      setIsFav(true);
      setColor('red');
      addFavorite(personaje);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <View style={styles.personajeContainer}>
          <View style={styles.imageContainer}>
              <Text style={styles.name}>{personaje.name}</Text>
              <Heart onPress={toggleFav} color={color} />
            <Image source={{ uri: personaje.image }} style={styles.img}></Image>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>Especie: {personaje.species}</Text>
              <Text style={styles.text}>
                Tipo: {personaje.type === '' ? 'unknown' : personaje.type}
              </Text>
              <TouchableHighlight onPress={locationDetails}>
                <View>
                  <Text style={styles.location}>Location: </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.episodesContainer}>
            <Text style={styles.episodioTitle}>Episodios</Text>

            <ScrollView contentContainerStyle={styles.scroll}>
              <List list={episodes}></List>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default PersonajeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  personajeContainer: {
    width: '85%',
    height: '80%',
    padding: 20,
    marginVertical: 20,
    backgroundColor: '#000',
    borderRadius: 16,
    marginTop: 20,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    height: '20%',
    marginBottom: 10,
  },
  episodesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '40%',
    marginTop: 10,
  },
  img: {
    width: '50%',
    height: '60%',
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
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  episodioTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 15,
  },
});
