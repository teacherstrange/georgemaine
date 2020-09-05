import Icon from "../Icon";
import { MenuList } from "../../../data";
import { SegmentedNav } from "../SegmentedNav";
import { PopUpButton } from "../Button";
import {
  NavigationContainer,
  NavigationLogoContainer,
  NavigationHeadline,
} from "./style";

interface navigationProps {
  buttonOnClick: Function;
  buttonIsAnimated: boolean;
  onIndexChange: Function;
  activeIndex: number;
}

export default ({
  buttonOnClick,
  buttonIsAnimated,
  onIndexChange,
  activeIndex,
}: navigationProps) => {
  function handleSegmentedControlClick(index) {
    onIndexChange(index);
  }

  return (
    <NavigationContainer>
      <NavigationLogoContainer>
        <Icon glyph="Logo" />
        <NavigationHeadline>Georgemaine</NavigationHeadline>
      </NavigationLogoContainer>
      <SegmentedNav
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
