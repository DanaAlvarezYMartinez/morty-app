import React, { useState, useEffect, useContext } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  ActivityIndicator,
  ImageBackground,
  FlatList,
} from 'react-native';
import axios from 'axios';
import Heart from '../components/Heart';
import { FavContext } from '../context/FavContext';
import ListItem from '../components/ListItem';
import Loader from '../components/Loader';

const image = {
  uri: 'https://i.pinimg.com/564x/07/ad/01/07ad01b520f8b9e67776680c995a236d.jpg',
};

const PersonajeDetail = ({ route, navigation }) => {
  const { url } = route.params;

  const [episodes, setEpisodes] = useState([]);
  const [personaje, setPersonaje] = useState([]);
  const [isFav, setIsFav] = useState(false);
  const [color, setColor] = useState('#fff');
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState('');
  const [page, setPage] = useState(0);
  const [urls, setUrls] = useState([]);

  const { addFavorite, deleteFavorite, favorites } = useContext(FavContext);

  const limit = 10;

  const checkFav = (id) => {
    for (const fav of favorites) {
      if (id === fav.id) {
        setIsFav(true);
        setColor('red');
      }
    }
  };

  const getEpisodes = async () => {
    let promises = [];
    for (const url2 of urls.slice(page * limit, (page + 1) * limit)) {
      promises.push(
        axios.get(url2).then((r) => {
          setEpisodes((episodes) => [...episodes, r.data]);
        })
      );
    }
    Promise.all(promises).then(() => {
      console.log('success');
    });
  };

  const getPersonajeInfo = async () => {
    setIsLoading(true);
    const res = await axios.get(url);
    checkFav(res.data.id);
    setPersonaje(res.data);
    setLocation(res.data.location.name);
    setUrls(res.data.episode);
    setIsLoading(false);
  };

  const locationDetails = () => {
    navigation.navigate('LocationDetail', { url: personaje.location.url });
  };

  const toggleFav = () => {
    if (isFav) {
      setIsFav(false);
      setColor('#fff');
      deleteFavorite(personaje);
    } else {
      setIsFav(true);
      setColor('red');
      addFavorite(personaje);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const renderFooter = () => {
    return isLoading ? <Loader color='#fff' /> : null;
  };

  const renderItem = ({ item }) => {
    return <ListItem item={item} />;
  };

  useEffect(() => {
    getEpisodes();
  }, [page, urls]);

  useEffect(() => {
    getPersonajeInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        {isLoading ? (
          <Loader color='#000' />
        ) : (
          <View style={styles.personajeContainer}>
            <View style={styles.imageContainer}>
              <Text style={styles.name}>{personaje.name}</Text>
              <Heart onPress={toggleFav} color={color} />
              <Image
                source={{ uri: personaje.image }}
                style={styles.img}
              ></Image>
              <View style={styles.infoContainer}>
                <Text style={styles.text}>Especie: {personaje.species}</Text>
                <Text style={styles.text}>
                  Tipo: {personaje.type === '' ? 'unknown' : personaje.type}
                </Text>
                <TouchableHighlight onPress={locationDetails}>
                  <View>
                    <Text style={styles.location}>{location} </Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>

            <View style={styles.episodesContainer}>
              <Text style={styles.episodioTitle}>Episodios</Text>

              <View style={styles.scroll}>
                <FlatList
                  data={episodes}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  onEndReached={handleLoadMore}
                  onEndReachedThreshold={0.5}
                  ListFooterComponent={renderFooter}
                />
              </View>
            </View>
          </View>
        )}
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
    marginTop: 30,
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
    textAlign: 'center',
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
    maxHeight: '75%',
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
