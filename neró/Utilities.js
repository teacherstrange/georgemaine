export const getRandomMovie = (arr) => {
  const randomMovie = Math.floor(Math.random() * arr.length);
  return arr[randomMovie];
};
