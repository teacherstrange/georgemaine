import { Wrapper } from "../black-mamba/components/Layout";
import Navigation from "../black-mamba/components/Navigation";
import { useState, useEffect } from "react";
import Popover, { MenuBlocker } from "../black-mamba/components/Popover";
import { MenuListData } from "../data/index";
import MobileSegmentedControl from "../black-mamba/components/SegmentedControl/MobileSegmentedControl";

export default () => {
  const [iconRotateState, setIconRotateState] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(0);
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
        <MobileSegmentedControl
          activeItem={activeMenuItem}
          itemCount={MenuListData}
          onClick={setActiveMenuItem}
        />
      </Wrapper>
      {iconRotateState && (
        <MenuBlocker onClick={() => setIconRotateState(!iconRotateState)} />
      )}
      <Popover isVisible={iconRotateState} />
    </>
  );
};
