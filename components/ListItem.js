import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    width: 250,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    color: '#000',
    borderRadius: 16,
  },
  title: {
    fontSize: 15,
    color: '#000',
  },
});

export default ListItem;
