import React from 'react';
import PersonajeItem from './PersonajeItem';

const Episodios = ({ episodios }) => {
  return episodios.map((epi, i) => <PersonajeItem key={i} personaje={epi} navigation={navigation} />);
};

export default Episodios;
