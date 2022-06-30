import React from 'react';
import PersonajeItem from './PersonajeItem';

const Personajes = ({ personajes, navigation}) => {
  return personajes.map((pers, i) => <PersonajeItem key={i} personaje={pers} navigation={navigation} />);
};

export default Personajes;
