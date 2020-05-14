import { Wrapper } from "../black-mamba/components/Layout";
import Navigation from "../black-mamba/components/Navigation";
import { useState, useEffect } from "react";
import Popover, { MenuBlocker } from "../black-mamba/components/Popover";

export default () => {
  const [iconRotateState, setIconRotateState] = useState(false);

  function onKeyDown(event) {
    switch (event.code) {
      case "Escape": {
        setIconRotateState(!iconRotateState);
      }
    }
  }
  useEffect(() => {
    if (iconRotateState) {
      window.addEventListener("keydown", onKeyDown);
    } else {
      window.removeEventListener("keydown", onKeyDown);
    }

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown, iconRotateState]);
  return (
    <>
      <Wrapper>
        <Navigation
          ButtonOnClick={() => setIconRotateState(!iconRotateState)}
          ButtonIsAnimated={iconRotateState}
        />
      </Wrapper>
      {iconRotateState && (
        <MenuBlocker onClick={() => setIconRotateState(!iconRotateState)} />
      )}
      <Popover isVisible={iconRotateState} />
    </>
  );
};
