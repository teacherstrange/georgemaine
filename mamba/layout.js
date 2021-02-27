import styled, { css } from "styled-components";

export const Header = styled.header`
  text-align: center;
  margin: 120px auto 0;
  width: calc(100% - 60px);
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
    width: calc(100% - 60px);
    max-width: 414px;
    margin: 44px auto;
  }
`;

export const Container = styled.li`
  display: flex;
  justify-content: center;
  position: relative;
  height: 314px;
  width: 50%;
  z-index: ${(props) => (props.isZoomed ? 10 : 0)};
  transition: z-index 0s ${(props) => (props.isZoomed ? 0 : 0.56)}s,
    opacity 0.3s ease 0.5s;

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

export const Separator = styled.div`
  height: 1px;
  background-color: var(--secondaryFill);
  margin: 60px auto;
  width: 960px;

  @media (max-width: 1059px) {
    width: calc(100% - 60px);
    max-width: 414px;
    margin: 44px auto;
  }
`;

export const ArticleContainer = styled.div`
  display: flex;
  padding: 0 calc((100vw - 414px) / 2);
  height: ${(props) => (props.isZoomed ? "100vh" : "70px")};
  overflow: ${(props) => (props.isZoomed ? "hidden scroll" : "hidden")};
  margin-bottom: 60px;
  transition-delay: 0s, 0.56s;
  transition: ${(props) =>
    props.isZoomed
      ? "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)"
      : "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1), height 0s .56s"};
  transform: matrix(1, 0, 0, 1, 0, ${(props) => props.y});

  p {
    ${(props) =>
      props.isZoomed &&
      css`
        opacity: 1;
        transition: opacity 0.37s cubic-bezier(0.52, 0.16, 0.24, 1) 0.37s;
      `}
  }

  @media (max-width: 478px) {
    padding: 0 30px;
  }

  @media (min-width: 1060px) {
    display: none;
  }
`;

export const ArticleContainerDesktop = styled.div`
  display: flex;
  padding: 0 calc((100vw - 960px) / 2);
  height: ${(props) => (props.isZoomed ? "100vh" : "121px")};
  overflow: ${(props) => (props.isZoomed ? "hidden scroll" : "hidden")};
  margin-bottom: 30px;
  transition-delay: 0s, 0.56s;
  transition: ${(props) =>
    props.isZoomed
      ? "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1)"
      : "transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1), height 0s .56s"};
  transform: matrix(1, 0, 0, 1, 0, ${(props) => props.y});

  p {
    ${(props) =>
      props.isZoomed &&
      css`
        opacity: 1;
        transition: opacity 0.18s cubic-bezier(0.32, 0.08, 0.24, 1) 0.18s;
      `}
  }

  @media (max-width: 1059px) {
    display: none;
  }
`;

export const Article = styled.article`
  transform-origin: 0 0;
  height: max-content;
  transition: transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
  transform: matrix(
    ${(props) => props.scale},
    0,
    0,
    ${(props) => props.scale},
    ${(props) => props.x},
    0
  );
`;
