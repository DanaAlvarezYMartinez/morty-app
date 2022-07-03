import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Loader = ({ color }) => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size='large' animating={true} color={color} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loader: {
    marginTop: 20,
    alignItems: 'center',
  },
});
