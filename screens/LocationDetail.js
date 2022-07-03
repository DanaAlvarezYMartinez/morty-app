import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import List from '../components/List';

const image = {
  uri: 'https://i.pinimg.com/564x/07/ad/01/07ad01b520f8b9e67776680c995a236d.jpg',
};

const LocationDetail = ({ route }) => {
  const { url } = route.params;

  const [location, setLocation] = useState([]);
  const [residents, setResidents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getLocationInfo = async () => {
    let promises = [];
    setIsLoading(true);
    const res = await axios.get(url);
    setLocation(res.data);
    for (const url2 of res.data.residents) {
      promises.push(
        axios.get(url2).then((r) => {
          setResidents((residents) => [...residents, r.data]);
        })
      );
    }
    Promise.all(promises).then(() => {
      console.log('success');
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getLocationInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <View style={styles.infoContainer}>
          {isLoading ? (
            <ActivityIndicator size='large' animating={true} color='#fff' />
          ) : (
            <View style={styles.information}>
              <Text style={styles.name}>{location.name}</Text>
              <Text style={styles.text}>Tipo: {location.type}</Text>
              <Text style={styles.text}>Dimensión: {location.dimension}</Text>
              <View style={styles.residentsContainer}>
                <Text style={styles.residentsTitle}>Residentes</Text>

                <ScrollView contentContainerStyle={styles.scroll}>
                  <List list={residents}></List>
                </ScrollView>
              </View>
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LocationDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    width: '85%',
    height: '80%',
    padding: 20,
    marginVertical: 20,
    backgroundColor: '#000',
    borderRadius: 16,
    marginTop: 30,
  },
  information: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
    height: '20%',
    justifyContent: 'flex-start',
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
    marginVertical: 5,
    textAlign: 'center',
  },
  residentsTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  residentsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '40%',
  },
});
