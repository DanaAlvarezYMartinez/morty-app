import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import Personajes from '../screens/PersonajesPage';
import PersonajeDetail from '../screens/PersonajeDetail';
import LocationDetail from '../screens/LocationDetail';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen name='PersonajesPage' component={Personajes} />

      <Stack.Screen name='PersonajeDetail' component={PersonajeDetail} />

      <Stack.Screen name='LocationDetail' component={LocationDetail} />
    </Stack.Navigator>
  );
};

export default AppStack;
