import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native';


const Opcion = (props) => {
  const { onPress, text, uri } = props;

  const img = {uri: uri}

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <ImageBackground source={img} resizeMode='cover' imageStyle={{ borderRadius: 6}} style={styles.img}>
        <Text style={styles.Text}>{text}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Opcion;

const styles = StyleSheet.create({
  btnContainer: {
    height: 130,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  Text: {
    color: '#000',
    textAlign: 'center',
    padding:5,
    backgroundColor:'#fff',
    borderRadius:16
  },
  img:{
      height:130,
      width:130,
      justifyContent:'center',
      alignItems:'center',
  }
});
