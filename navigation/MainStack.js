import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/LoginScreen';
import Profile from '../screens/Profile';
import Register from '../screens/Register'
import Personajes from '../screens/PersonajesPage'
import PersonajeDetail from '../screens/PersonajeDetail';
import LocationDetail from '../screens/LocationDetail';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Login' component={LoginScreen} />

        <Stack.Screen name='PersonajesPage' component={Personajes} />

        <Stack.Screen name='Register' component={Register} />

        <Stack.Screen name='PersonajeDetail' component={PersonajeDetail} />

        <Stack.Screen name='LocationDetail' component={LocationDetail} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
