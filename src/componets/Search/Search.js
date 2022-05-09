import React from 'react';
import './style.css';
import {useEffect, useState} from "react";
import {useDebounce} from "../../hooks/useDebounce";

const Search = ({setQueryStr}) => {
  const [value, setValue] = useState('');
  const debouncedSearchTerm = useDebounce(value, 500) || "";
  const onChangeHandler = (e) => setValue(e.target.value);

  useEffect(() => setQueryStr(debouncedSearchTerm), [debouncedSearchTerm, setQueryStr]);

  return <input type="text"
                placeholder="Find albums..."
                onChange={onChangeHandler}/>
};

export default Search;