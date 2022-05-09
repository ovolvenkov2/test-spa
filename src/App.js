import List from './componets/List/List'
import Search from "./componets/Search/Search";
import {useState} from "react";

const App = () => {
  const [queryStr, setQueryStr] = useState('');

  return (
    <div className="root">
      <Search setQueryStr={setQueryStr}/>
      <List queryStr={queryStr}/>
    </div>
  );
}

export default App;
