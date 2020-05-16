import { Wrapper } from "../black-mamba/components/Layouts/";
import Navigation from "../black-mamba/components/Navigation";
import { useState, useEffect } from "react";
import Popover from "../black-mamba/components/Popover";
import { MenuBlocker } from "../black-mamba/components/Popover/style";
import { MenuList, galleryListData } from "../data/index";
import MobileSegmentedControl from "../black-mamba/components/SegmentedControl/MobileSegmentedControl";
import Gallery from "../black-mamba/components/Gallery";

export default () => {
  const [iconRotateState, setIconRotateState] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  function handleIndexChange(index: number) {
    setActiveMenuItem(index);
  }
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
          buttonOnClick={() => setIconRotateState(!iconRotateState)}
          buttonIsAnimated={iconRotateState}
          onIndexChange={handleIndexChange}
          activeIndex={activeMenuItem}
        />

        <Gallery
          currentGalleryItem={activeMenuItem}
          galleryList={galleryListData}
        />

        <MobileSegmentedControl
          activeMenuItem={activeMenuItem}
          menuList={MenuList}
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
