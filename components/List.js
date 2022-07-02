import React from 'react';
import ListItem from './ListItem';


const List = ({ list }) => {
  return list.map((item, i) => <ListItem key={i} item={item}/>);
};

export default List;


