import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import axios from 'axios';

const LocationDetail = ({ route }) => {

  const { url } = route.params;

  const [location, setLocation] = useState([]);

  useEffect(() => {
    const getLocationInfo = async () => {
      const res = await axios.get(url);
      console.log(res.data);
      setLocation(res.data);
    };
    getLocationInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
          <View style={styles.information}>
              <Text style={styles.name}>{location.name}</Text>
              <Text style={styles.text}>Type: {location.type}</Text>
              <Text style={styles.text}>Dimension: {location.dimension}</Text>
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
    marginVertical: 20,
    backgroundColor: '#000',
    borderRadius: 16,
  },
  information:{
    marginTop:20,
    flex: 1,
    alignItems: 'center',
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
    marginVertical:5,
  },
});
