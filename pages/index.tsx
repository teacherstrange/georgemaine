import { Wrapper } from "../black-mamba/components/Layouts/";
import Navigation from "../black-mamba/components/Navigation";
import { useState, useEffect } from "react";
import { PopOverMenuBlocker, PopOver } from "../black-mamba/components/Popover";
import { MenuList, galleryListData } from "../data/index";
import MobileSegmentedControl from "../black-mamba/components/SegmentedNav/MobileSegmentedNav";
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

      <PopOverMenuBlocker
        isVisible={iconRotateState}
        onClick={() => setIconRotateState(!iconRotateState)}
      />

      <PopOver isVisible={iconRotateState} />
    </>
  );
};
