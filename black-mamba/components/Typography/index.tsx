import styled, { css } from "styled-components";

const h1Style = css`
  font-size: var(--h1);
  line-height: 1;
  letter-spacing: -0.04em;
`;

const h2Style = css`
  font-size: var(--h2);
  line-height: 1.0476190476;
  letter-spacing: -0.03em;
  margin: 0 0 var(--spaceXXS);
`;

const h3Style = css`
  font-size: var(--h3);
  line-height: 1.1764705882;
  letter-spacing: -0.04em;
  margin: 0 0 var(--spaceXXS);
  font-weight: 700;
`;

const h4Style = css`
  font-size: var(--h4);
  line-height: 1.1428571429;
  font-weight: 600;
  margin: 0 0 var(--spaceXXS);
  letter-spacing: -0.01em;
`;

export const H1 = styled.h1`
  ${h2Style}
  color: var(--primaryTextLight);
  text-align: center;

  @media only screen and (min-width: 768px) {
    ${h1Style}
  }
`;

export const H2 = styled.h2`
  ${h3Style}
  color: var(--primaryText);

  @media only screen and (min-width: 768px) {
    ${h2Style}
  }
`;

export const H3 = styled.h3`
  ${h4Style}
  color: var(--primaryText);

  @media only screen and (min-width: 768px) {
    ${h3Style}
  }
`;

export const H4 = styled.h4`
  ${h4Style}
`;

export const H5 = styled.h5`
  font-size: var(--h5);
  color: var(--primaryText);
  line-height: 1.2;
  font-weight: 600;
  margin: 0 0 var(--spaceXS);
  letter-spacing: 0.005em;
`;

export const H6 = styled.h6`
  font-size: var(--h6);
  color: var(--primaryText);
  line-height: 1.4117647059;
  font-weight: 600;
  margin: 0 0 var(--spaceXS);
  letter-spacing: 0.005em;
`;

export const Caption = styled.p`
  color: var(--secondaryTextLight);
  font-size: var(--h5);
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0.012em;
  margin: 0;
`;

export const P = styled.p`
  color: var(--secondaryText);
  font-size: var(--h6);
  font-weight: 400;
  line-height: 1.5294117647;
  letter-spacing: 0.004em;
  margin: 0 0 var(--spaceXS);
`;

export const A = styled.a`
  color: var(--primaryText);
  font-size: var(--h6);
  line-height: 1.6470588235;
  font-weight: 600;
  font-family: inherit;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  align-items: center;
  padding: var(--spaceXXS) 20px;
  border-radius: 18px;

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    background-color: var(--opaqueHover);
  }
`;
