import styled from "styled-components";

export const Section = styled.section`
  margin: 60px auto;
  width: calc(100% - 64px);
  max-width: 414px;

  @media (min-width: 1060px) {
    width: 960px;
    max-width: unset;
  }
`;
