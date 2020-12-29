import React from "react";
import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  margin: 120px auto 0;
  width: calc(100% - 64px);
  max-width: 414px;

  @media (min-width: 980px) {
    width: calc(100% -100px);
    max-width: 960px;
  }
`;
