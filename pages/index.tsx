import { Wrapper } from "../black-mamba/components/Layout";
import Navigation from "../black-mamba/components/Navigation";
import { useState } from "react";
import Popover, { MenuBlocker } from "../black-mamba/components/Popover";

export default () => {
  const [iconRotateState, setIconRotateState] = useState(false);
  return (
    <>
      <Wrapper>
        <Navigation
          BtnOnClick={() => setIconRotateState(!iconRotateState)}
          IconRotateState={iconRotateState}
        />
      </Wrapper>
      {iconRotateState && (
        <MenuBlocker onClick={() => setIconRotateState(!iconRotateState)} />
      )}
      {iconRotateState && <Popover />}
    </>
  );
};
