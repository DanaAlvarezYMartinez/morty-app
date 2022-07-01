import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import axios from 'axios';
import List from '../components/List';

const LocationDetail = ({ route }) => {
  const { url } = route.params;

  const [location, setLocation] = useState([]);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    let promises = [];
    const getLocationInfo = async () => {
      const res = await axios.get(url);
      setLocation(res.data);
      for (const url2 of res.data.residents) {
        promises.push(
          axios.get(url2).then((r) => {
            setResidents((residents) => [...residents, r.data]);
          })
        );
      }
    };
    Promise.all(promises).then(() => {
      console.log('success');
    });

    getLocationInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.information}>
          <Text style={styles.name}>{location.name}</Text>
          <Text style={styles.text}>Type: {location.type}</Text>
          <Text style={styles.text}>Dimension: {location.dimension}</Text>
          <View style={styles.residentsContainer}>
            <Text style={styles.residentsTitle}>Residentes</Text>

            <ScrollView contentContainerStyle={styles.scroll}>
              <List list={residents}></List>
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LocationDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#67dd23',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    flex: 1,
    width: '90%',
    height: '95%',
    padding: 20,
    marginVertical: 20,
    backgroundColor: '#000',
    borderRadius: 16,
    position: 'absolute',
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
