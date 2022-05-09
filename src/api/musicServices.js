import axios from 'axios';

axios.defaults.baseURL = 'https://itunes.apple.com/';

const getBandsData = (band, setQueryStr) => {
  axios
    .get(`search?limit=5&term=${band}`)
    .then(data => setQueryStr(data.data?.results?.map((band) => band?.collectionName)?.sort()))
    .catch(error => console.error(error));
};

export default getBandsData;