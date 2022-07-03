import React from 'react';
import { StyleSheet,TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Heart = ({ onPress, color }) => {

  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <Icon
        name='heart'
        size={20}
        color={color}
        style={{marginLeft:20}}
      />
    </TouchableWithoutFeedback>
  );
};

export default Heart;

const styles = StyleSheet.create({
    container: {
        width:40,
        height:40,
    },
  });
  