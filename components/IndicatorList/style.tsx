import styled from "styled-components";

interface Props {
  current: number;
  index: number;
}

export const IndicatorListContainer = styled.ul`
  position: fixed;
  display: flex;
  bottom: 60px;
  left: 0;
  right: 0;
  z-index: 10;
  list-style: none;
  justify-content: center;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 599px) {
    bottom: 90px;
  }
`;

export const IndicatorListItem = styled.li<Props>`
  list-style: none;
  margin: 6px 9px;
  width: 9px;
  height: 9px;
  background: #86868b;
  border-radius: 50%;
  opacity: ${(props) => props.index != props.current && 0.4};
`;
