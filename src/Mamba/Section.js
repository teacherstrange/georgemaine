import styled from "styled-components";

export const Section = styled.section`
  margin: 60px auto;
  width: 960px;

  @media (max-width: 1059px) {
    width: calc(100% - 64px);
    max-width: 414px;
  }
`;
