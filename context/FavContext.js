import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = async (personaje) => {
    try {
      // i get the favs in the storage
      let js_obj = await AsyncStorage.getItem('favoritos');
      let favs = [];
      // i add the new character
      favs.push(personaje);
      if (js_obj) {
        const obj = JSON.parse(js_obj);
        for (let i in obj) {
          // so i don't have two times the same item, i ask it already exists before adding it
          if (obj[i].id !== personaje.id) {
            favs.push(obj[i]);
          }
        }
      }
      setFavorites(favs);
      AsyncStorage.setItem('favoritos', JSON.stringify(favs));
    } catch (error) {
      console.log(`addFav error  ${error}`);
    }
  };

  const deleteFavorite = async (personaje) => {
    try {
      // i get the favs in the storage
      let js_obj = await AsyncStorage.getItem('favoritos');
      let favs = [];
      if (js_obj) {
        const obj = JSON.parse(js_obj);
        for (let i in obj) {
          // if the id is different i add it, else i don't
          if (obj[i].id !== personaje.id) {
            favs.push(obj[i]);
          }
        }
      }
      setFavorites(favs);
      AsyncStorage.setItem('favoritos', JSON.stringify(favs));
    } catch (error) {
      console.log(`deleteFav error  ${error}`);
    }
  };

  const loadFavs = async () => {
    try {
      let js_obj = await AsyncStorage.getItem('favoritos');
      let favs = [];
      if (js_obj) {
        const obj = JSON.parse(js_obj);
        for (let i in obj) {
          favs.push(obj[i]);
        }
      }
      setFavorites(favs);
    } catch (error) {
      console.log(`loadFavs error  ${error}`);
    }
  };

  useEffect(() => {
    loadFavs();
  }, []);

  return (
    <FavContext.Provider value={{ addFavorite, deleteFavorite, favorites }}>
      {children}
    </FavContext.Provider>
  );
};
