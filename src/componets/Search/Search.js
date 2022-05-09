import config from './Search.config'
import {useEffect, useState} from "react";
import {useDebounce} from "../../hooks/useDebounce";

const Search = ({setQueryStr}) => {
  const [value, setValue] = useState('');
  const debouncedSearchTerm = useDebounce(value, 500) || "";
  const onChangeHandler = (e) => setValue(e.target.value);

  useEffect(() => setQueryStr(debouncedSearchTerm), [debouncedSearchTerm]);

  return <input type="text"
                placeholder={config.placeholderText}
                onChange={onChangeHandler}/>
};

export default Search;