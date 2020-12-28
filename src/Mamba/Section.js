import styled from "styled-components";

export const Section = styled.section`
  margin: 60px auto;
  width: calc(100% - 64px);
  max-width: 414px;

  @media only screen and (min-width: 980px) {
    width: calc(100% - 100px);
    max-width: 960px;
  }
`;
