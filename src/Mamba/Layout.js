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

const MorphTransition = "all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)";
const fadeIn = "opacity .3s ease .5s";

export const Container = styled.li`
  height: 314px;
  width: 100%;
  z-index: 0;

  @media (min-width: 1060px) {
    width: 50%;
  }
  transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1), ${fadeIn};

  /* ${(props) =>
    props.isMorphed &&
    css`
      top: ${props.isMorphedTop}px;
      left: ${props.isMorphedLeft}px;
      z-index: 2;
      width: 100vw;
      height: 100vh;
      background-color: var(--overlay);
      backdrop-filter: blur(20px) saturate(50%);

      @media (min-width: 1060px) {
        width: 100vw;
      }
    `} */

  ${(props) =>
    props.gallerySize &&
    css`
      opacity: ${props.activeIndex === 0 ? 1 : 0};
    `}
`;

export const Body = styled.figure`
  ${(props) =>
    props.image &&
    css`
      background-image: ${props.image};
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    `}
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);

  @media (max-width: 1023px) {
    justify-content: center;

    figcaption {
      padding-top: calc(100% + ${(props) => (props.image ? "124px" : "32px")});
    }
  }
`;
