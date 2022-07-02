import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Notificacion = ({ text }) => {
  return (
    <View style={styles.noItemsContainer}>
      <Text style={styles.title}>{text}</Text>
      <Icon name='meh' size={40} color='#fff' style={{ marginTop: 20 }} />
    </View>
  );
};

export default Notificacion;

const styles = StyleSheet.create({
    noItemsContainer: {
        backgroundColor: '#000',
        borderRadius: 16,
        alignItems: 'center',
        padding: 10,
        paddingVertical: 40,
        opacity: 0.9,
      },
      title: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 5,
      },
});
