import React from 'react';
import { ImageBackground, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const img = {
  uri: 'https://i.pinimg.com/736x/e3/9d/a9/e39da981a8830c22f085ab1e60fa31d7.jpg',
};

const Opcion = (props) => {
  const { onPress, text, uri } = props;

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <ImageBackground source={img} resizeMode='cover' style={styles.img}>
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
    backgroundColor: '#a3f92f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#2eaa35',
    borderWidth: 1,
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
