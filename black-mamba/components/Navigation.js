import styled from "styled-components";
import Icon from "./Icon";
import { P } from "./Typograhy";
import { MenuList } from "../../data";
import { SegmentedControl } from "./SegmentedControl";
import { PopUpButton } from "./Button";

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 48px);
  align-items: center;
  padding: 0 24px;
  height: 34px;
  position: fixed;
  top: 20px;
  z-index: 10;
`;

const NavigationLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavigationHeadline = styled(P)`
  font-weight: var(--fontWeightPrimary);
  font-size: var(--fontSizeQuaternary);
  color: var(--white);
  margin: 0 0 0 var(--spaceXXS);
`;

export default ({
  buttonOnClick,
  buttonIsAnimated,
  onIndexChange,
  activeIndex,
}) => {
  function handleSegmentedControlClick(index) {
    onIndexChange(index);
  }

  return (
    <NavigationContainer>
      <NavigationLogoContainer>
        <Icon glyph="Logo" />
        <NavigationHeadline>Georgemaine</NavigationHeadline>
      </NavigationLogoContainer>
      <SegmentedControl
        activeMenuItem={activeIndex}
        menuList={MenuList}
        onClick={handleSegmentedControlClick}
      />
      <PopUpButton onClick={buttonOnClick} animated={buttonIsAnimated}>
        Get in touch
      </PopUpButton>
    </NavigationContainer>
  );
};
