import React from 'react';
import { StyleSheet,TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Heart = ({ onPress, color }) => {

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <Icon
        name='heart'
        size={40}
        color={color}
        style={{position:'absolute',
        top:40,
        right:50,
        zIndex:9}}
      />
    </TouchableWithoutFeedback>
  );
};

export default Heart;

const styles = StyleSheet.create({
    container: {
        width:40,
        height:40,
        position:'absolute',
        top:40,
        right:50,
        zIndex:9,
    },
  });
  