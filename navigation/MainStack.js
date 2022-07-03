import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import {
  View,
  ActivityIndicator 
} from 'react-native';
import { AuthContext } from '../context/AuthContext';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const MainStack = () => {
  
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {(userToken !== null) ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainStack;
