export const sortLettersArray = (arrayLetters, albumsArray) => {
  const isAlbums = albumsArray?.length;
  const lastItem = isAlbums ? albumsArray.shift() : arrayLetters.shift();
  isAlbums && arrayLetters.shift();

  return [...arrayLetters, lastItem];
};