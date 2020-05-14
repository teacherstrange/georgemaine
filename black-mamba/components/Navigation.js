import styled from "styled-components";
import Logo from "./Logo";
import { P } from "../Typograhy";
import { Button, OpaqueButton } from "./Button";

import { MenuListData } from "../../data";
import { useState } from "react";
import SegmentedControl from "./SegmentedControl";
import PopUpButton from "./Button/PopUpButton";

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  align-items: center;
  padding: 0 20px;
  height: 34px;
  position: sticky;
  top: 20px;
  z-index: 10;
`;

const NavigationLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavigationHeadline = styled(P)`
  font-weight: var(--fontWeightPrimary);
  font-size: 1.3em;
  color: #fff;
  margin: 0 0 0 8px;
`;

export default ({ ButtonOnClick, ButtonIsAnimated }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  return (
    <NavigationContainer>
      <NavigationLogoContainer>
        <Logo />
        <NavigationHeadline>Georgemaine</NavigationHeadline>
      </NavigationLogoContainer>
      <SegmentedControl
        activeItem={activeMenuItem}
        itemCount={MenuListData}
        onClick={setActiveMenuItem}
      />
      <PopUpButton onClick={ButtonOnClick} isAnimated={ButtonIsAnimated}>
        Get in touch
      </PopUpButton>
    </NavigationContainer>
  );
};
