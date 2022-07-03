import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userName, setUserName] = useState(' ');


  const login = (name) => {
    console.log('call login');
    setIsLoading(true);
    setUserToken('logged');
    if(name){
      console.log('login nombre', name);
        setUserName(name);
        AsyncStorage.setItem('userName',userName);
    }
    AsyncStorage.setItem('userToken', 'logged');
    setIsLoading(false);
  };

  const logout = () => {
    console.log('logout');
    console.log('name en logOut ', userName);
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      console.log('is Loggedin');
      setIsLoading(true);
      const userToken = await AsyncStorage.getItem('userToken');
      let name = await AsyncStorage.getItem('userName');
      console.log('islogged in name', name);
      setUserName(name);
      setUserToken(userToken);
      setIsLoading(false);
    } catch (error) {
      console.log(`isLoggedIn error ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, isLoading, userToken, userName }}
    >
      {children}
    </AuthContext.Provider>
  );
};
