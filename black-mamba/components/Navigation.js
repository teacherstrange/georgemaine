import styled from "styled-components";
import Logo from "./Logo";
import { P, A } from "../Typograhy";
import { Btn } from "./Button";
import { MenuListData } from "../../data";

const NavigationContainer = styled.nav`
  display: flex;
  max-width: 100%;
  align-items: center;
  padding: 0 20px;
  height: 56px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavigationLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const NavigationHeadline = styled(P)`
  font-weight: var(--fontWeightPrimary);
  font-size: 1.5em;
  color: #fff;
  margin: 0 0 0 8px;
`;

const IconContainer = styled.svg`
  transform: ${(props) => (props.rotateState ? "rotate(180deg)" : "")};
  margin: 0 0 0 8px;
  transition: transform 100ms ease;
`;

export default ({ BtnOnClick, IconRotateState }) => {
  return (
    <NavigationContainer>
      <NavigationLogoContainer>
        <Logo />
        <NavigationHeadline>Georgemaine</NavigationHeadline>
      </NavigationLogoContainer>
      <NavigationList>
        {MenuListData.map((item, index) => {
          return (
            <A key={index} url={item.url}>
              {item.name}
            </A>
          );
        })}
      </NavigationList>
      <Btn onClick={BtnOnClick}>
        Get in touch
        <IconContainer
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 12"
          width="12"
          height="12"
          rotateState={IconRotateState}
        >
          <path
            d="M2 4.5l4 4 4-4"
            fill="transparent"
            strokeWidth="1.5"
            stroke="currentColor"
            strokeLinecap="round"
          ></path>
        </IconContainer>
      </Btn>
    </NavigationContainer>
  );
};
