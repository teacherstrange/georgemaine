import styled from "styled-components";
import { P } from "../../Typograhy";

export const Container = styled.header`
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

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavigationHeadline = styled(P)`
  font-weight: var(--fontWeightPrimary);
  font-size: 1.3em;
  color: #fff;
  margin: 0 0 0 8px;
`;
