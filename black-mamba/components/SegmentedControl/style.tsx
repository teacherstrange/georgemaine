import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  position: relative;
  flex: 1;
  max-width: 620px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  overflow: hidden;
  background-color: rgba(38, 38, 38, 0.73);
  border-radius: 18px;
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  -webkit-filter: saturate(140%);
  filter: saturate(140%);
`;

export const ActiveItemBackground = styled.div`
  position: absolute;
  height: 28px;
  width: 25%;
  background-color: #fff;
  border-radius: 14px;
  left: ${(props) =>
    props.currentPosition === 0
      ? "4px"
      : props.currentPosition === props.maxItems - 1
      ? "calc(75% - 4px)"
      : `calc(${props.currentPosition} * 25%)`};
  transition: left 0.3s cubic-bezier(0.1, 0, 0, 1);
  z-index: 1;
`;
