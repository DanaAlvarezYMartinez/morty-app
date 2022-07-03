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
  
  const { isLoading, userToken, userName } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContente: 'center', alignItems: 'center' }}
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
