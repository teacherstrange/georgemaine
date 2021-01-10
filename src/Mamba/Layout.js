import styled, { css } from "styled-components";

export const Header = styled.header`
  text-align: center;
  margin: 120px auto 0;
  width: calc(100% - 64px);
  max-width: 414px;

  @media (min-width: 1060px) {
    width: calc(100% -100px);
    max-width: 960px;
  }
`;

export const Section = styled.section`
  margin: 60px auto;
  width: 960px;

  @media (max-width: 1059px) {
    width: calc(100% - 64px);
    max-width: 414px;
  }
`;

const fadeIn = "opacity .3s ease .5s";

export const Container = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  height: 314px;
  width: 100%;
  z-index: ${(props) => (props.isMorphed ? 10 : 0)};
  transition: z-index 0s ${(props) => (props.isMorphed ? 0 : 0.56)}s, ${fadeIn};

  @media (min-width: 1060px) {
    width: 50%;
  }

  ${(props) =>
    props.gallerySize &&
    css`
      opacity: ${props.activeIndex === 0 ? 1 : 0};
    `}
`;
