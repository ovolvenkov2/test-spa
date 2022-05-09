import axios from 'axios';
import {sortAlbums} from "../utils/sortAlbums";

const getBandsData = (band, setQueryStr) => {
  axios
    .get(`https://itunes.apple.com/search?limit=5&term=${band}`)
    .then(data => setQueryStr(sortAlbums(data.data)))
    .catch(error => console.error(error));
};

export default getBandsData;