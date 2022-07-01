import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} />

      <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
