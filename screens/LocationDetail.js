import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from 'react-native';
import axios from 'axios';
import ListItem from '../components/ListItem';
import Loader from '../components/Loader';

const image = {
  uri: 'https://i.pinimg.com/564x/07/ad/01/07ad01b520f8b9e67776680c995a236d.jpg',
};

const LocationDetail = ({ route }) => {
  
  const { url } = route.params;

  const [location, setLocation] = useState([]);
  const [residents, setResidents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [urls, setUrls] = useState([]);

  const limit = 14;

  const getResidents = async () => {
    let promises = [];
    for (const url2 of urls.slice(page * limit, (page + 1) * limit)) {
      promises.push(
        axios.get(url2).then((r) => {
          setResidents((residents) => [...residents, r.data]);
        })
      );
    }
    Promise.all(promises).then(() => {
      console.log('success');
    });
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

  const getLocationInfo = async () => {
    setIsLoading(true);
    const res = await axios.get(url);
    setLocation(res.data);
    setUrls(res.data.residents);
    setIsLoading(false);
  };

  useEffect(() => {
    getResidents();
  }, [page, urls]);

  useEffect(() => {
    getLocationInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <View style={styles.infoContainer}>
          {isLoading ? (
            <Loader color='#fff' />
          ) : (
            <View style={styles.information}>
              <Text style={styles.name}>{location.name}</Text>
              <Text style={styles.text}>Tipo: {location.type}</Text>
              <Text style={styles.text}>Dimensión: {location.dimension}</Text>
              <View style={styles.residentsContainer}>
                <Text style={styles.residentsTitle}>Residentes</Text>

                <View style={styles.scroll}>
                  <FlatList
                    data={residents}
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
    maxHeight: '80%',
  },
  residentsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '40%',
  },
});
