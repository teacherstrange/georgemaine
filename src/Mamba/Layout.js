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

  width: 50%;
  z-index: ${(props) => (props.isMorphed ? 10 : 0)};
  transition: z-index 0s ${(props) => (props.isMorphed ? 0 : 0.56)}s, ${fadeIn};

  @media (max-width: 1059px) {
    min-width: 100%;
  }

  ${(props) =>
    props.gallerySize &&
    css`
      opacity: ${props.activeIndex === 0 ? 1 : 0};
    `}
`;

export const Tv = styled.div`
  border-radius: 4px;
  border: 3px solid #111;
  position: absolute;
  transform: matrix(
    ${(props) => props.tvScale},
    0,
    0,
    ${(props) => props.tvScale},
    ${(props) => (props.tvX ? props.tvX : 0)},
    ${(props) => props.tvY}
  );
  transform-origin: center 0;
  transition: transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
`;
