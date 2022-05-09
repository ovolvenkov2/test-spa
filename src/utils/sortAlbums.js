export const sortAlbums = (data) => {
  const {results} = data;

  return results.map((band) => band.collectionName).sort();
}