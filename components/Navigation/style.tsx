import styled from "styled-components";
import { P } from "../Typography";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 48px);
  align-items: center;
  padding: 0 24px;
  height: 36px;
  position: fixed;
  top: 24px;
  z-index: 10;
  color: var(--secondaryTextDark);

  @media (min-width: 1024px) {
    padding: 0 60px;
    width: calc(100% - 120px);
    top: 60px;
  }
`;

export const NavigationLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationHeadline = styled(P)`
  font-weight: 600;
  font-size: var(--h5);
  color: inherit;
  margin: 0 0 0 var(--spaceXXS);
`;
