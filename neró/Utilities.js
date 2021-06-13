import { useState, useEffect } from "react";

export const getRandomMovie = (arr) => {
  const randomMovie = Math.floor(Math.random() * arr.length);
  return arr[randomMovie];
};

// Credits go to https://usehooks.com/useKeyPress/
export const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const downHandler = ({ key }) => {
    key === targetKey && setKeyPressed(true);
  };

  const upHandler = ({ key }) => {
    key === targetKey && setKeyPressed(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []);
  return keyPressed;
};
