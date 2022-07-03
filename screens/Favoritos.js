import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  ImageBackground,
} from 'react-native';
import { FavContext } from '../context/FavContext';
import PersonajeItem from '../components/PersonajeItem';
import Notificacion from '../components/Notificacion';

const image = {
  uri: 'https://i.pinimg.com/564x/07/ad/01/07ad01b520f8b9e67776680c995a236d.jpg',
};

const Favoritos = ({ navigation }) => {

  const { favorites } = useContext(FavContext);

  const renderItem = ({ item }) => {
    return item.length !== 0 ? (<PersonajeItem personaje={item} navigation={navigation} />) : null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <View style={styles.searchContainer}>
          <Text style={styles.title}>Mis favoritos</Text>

          <View style={styles.personajesContainer}>
            <View contentContainerStyle={styles.scroll}>
              {favorites.length === 0 ? (
                <Notificacion text="Oops! Parece que no hay favoritos"/>
              ) : (
                <FlatList
                  data={favorites}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Favoritos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 5,
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
    width: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
