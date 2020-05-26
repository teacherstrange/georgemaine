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
  top: 20px;
  z-index: 10;
  color: var(--secondaryTextDark);
`;

export const NavigationLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationHeadline = styled(P)`
  font-weight: 600;
  font-size: var(--h6);
  color: inherit;
  margin: 0 0 0 var(--spaceXXS);
`;
