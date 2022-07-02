import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Personajes from '../screens/PersonajesPage';
import PersonajeDetail from '../screens/PersonajeDetail';
import LocationDetail from '../screens/LocationDetail';
import Profile from '../screens/Profile';
import Favoritos from '../screens/Favoritos';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>

      <Stack.Screen name='Profile' component={Profile} />

      <Stack.Screen name='PersonajesPage' component={Personajes} />

      <Stack.Screen name='Favoritos' component={Favoritos} />

      <Stack.Screen name='PersonajeDetail' component={PersonajeDetail} />

      <Stack.Screen name='LocationDetail' component={LocationDetail} />
    </Stack.Navigator>
  );
};

export default AppStack;
