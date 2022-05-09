import React from 'react';
import './List.css';
import ListItem from './ListItem/ListItem'
import {useEffect, useState} from "react";
import {sortArrayValues} from "../../utils/sortArrayValues";
import getBandsData from "../../api/musicServices";

const List = ({queryStr}) => {
  const defaultLettersArray = ['A', 'B', 'C', 'D', 'E'];
  const [ albumsData, setAlbumsData ] = useState();
  const [ arrayLetters, setArrayLetters ] = useState(defaultLettersArray);

  useEffect(() => {
    const interval = setInterval(() => {
      setArrayLetters(sortArrayValues(arrayLetters, albumsData));
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    getBandsData(queryStr, setAlbumsData);
  },[queryStr]);

  const listItems = arrayLetters.map(((item, index) => <ListItem itemText={item} key={item + index}/>));

  return <ul>
    {listItems}
  </ul>
}

export default List;