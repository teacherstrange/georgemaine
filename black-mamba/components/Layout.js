import styled from "styled-components";

export const Wrapper = styled.main`
  width: calc(100% - var(--spaceL));
  margin: var(--spaceL) auto;
  max-width: 730px;

  @media only screen and (min-width: 600px) {
    margin: var(--spaceXL) auto var(--spaceL);
    width: calc(100% - var(--spaceXL));
  }
`;
