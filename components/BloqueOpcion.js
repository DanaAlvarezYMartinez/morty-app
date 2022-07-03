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
    height: '50%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  Text: {
    color: '#000',
    textAlign: 'center',
    padding:5,
    backgroundColor:'#fff',
    borderRadius:16
  },
  img:{
      minHeight:150,
      minWidth:150,
      justifyContent:'center',
      alignItems:'center',
  }
});
