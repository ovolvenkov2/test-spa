import ListItem from './ListItem/ListItem'
import {useEffect, useState} from "react";
import {sortLettersArray} from "../../utils/sortLettersArray";
import getBandsData from "../../api/musicServices";
import config from './List.config'

const List = ({queryStr}) => {
  const { defaultLettersArray } = config;
  const [ albumsData, setAlbumsData ] = useState();
  const [ arrayLetters, setArrayLetters ] = useState(defaultLettersArray);

  useEffect(()=>{
    const interval = setInterval(() => {
      setArrayLetters(sortLettersArray(arrayLetters, albumsData));
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(()=>{
    getBandsData(queryStr, setAlbumsData);
  },[queryStr]);

  const listItems = arrayLetters.map(((item, index) => <ListItem itemText={item} key={item + index}/>));

  return <ul>
    {listItems}
  </ul>
}

export default List;