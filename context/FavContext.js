import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = async (personaje) => {
    try {
      // i get the favs in the storage
      let js_obj = await AsyncStorage.getItem('favoritos');
      //   array where i'll put the stuff
      let favs = [];
      favs.push(personaje);
      if (js_obj) {
        const obj = JSON.parse(js_obj);
        // i put them in an array
        for (let i in obj) {
          // so i don't have two times the same item, i ask it already exists before adding it
          if (obj[i].id !== personaje.id) {
            favs.push(obj[i]);
          }
        }
      }
      //   this i do it anyways
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
      //   array where i'll put the stuff
      let favs = [];
      if (js_obj) {
        const obj = JSON.parse(js_obj);
        // i put them in an array
        for (let i in obj) {
          // if the id is different i add it, otherway i don't
          if (obj[i].id !== personaje.id) {
            favs.push(obj[i]);
          }
        }
      }
      //   this i do it anyways
      setFavorites(favs);
      AsyncStorage.setItem('favoritos', JSON.stringify(favs));
    } catch (error) {
      alert(`deleteFav error  ${error}`);
    }
  };

  const loadFavs = async () => {
    try {
      // i get the favs in the storage
      let js_obj = await AsyncStorage.getItem('favoritos');
      //   array where i'll put the stuff
      let favs = [];
      if (js_obj) {
        const obj = JSON.parse(js_obj);
        // i put them in an array
        for (let i in obj) {
          favs.push(obj[i]);
        }
      }
      //   this i do it anyways
      setFavorites(favs);
    } catch (error) {
      alert(`loadFavs error  ${error}`);
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
