import styled from "styled-components";

export const H1 = styled.h1`
  color: var(--primaryText);
  font-weight: var(--fontWeightPrimary);
  font-size: var(--fontSizeSecondary);
  line-height: 1.125;
  margin: 0 0 var(--spaceXS);
  letter-spacing: -0.04em;
  text-align: center;
  color: var(--primaryTextLight);

  @media only screen and (min-width: 768px) {
    font-size: var(--fontSizePrimary);
    line-height: 1.0410958904;
    margin: 0 0 var(--spaceS);
  }
`;

export const H2 = styled.h2`
  color: var(--primaryText);
  font-weight: var(--fontWeightPrimary);
  font-size: var(--fontSizeTertiary);
  line-height: 1.18181818;
  letter-spacing: 0;
  margin: 0 0 var(--spaceM);

  @media only screen and (min-width: 768px) {
    font-size: var(--fontSizeSecondary);
    line-height: 1.3125;
    letter-spacing: -0.005em;
  }
`;

export const H3 = styled.h3`
  color: var(--primaryText);
  font-weight: var(--fontWeightSecondary);
  font-size: var(--fontSizeQuaternary);
  line-height: 1.5294117647;
  letter-spacing: 0.004em;
  margin: 0 0 var(--spaceM);

  @media only screen and (min-width: 768px) {
    font-size: var(--fontSizeTertiary);
    line-height: 1.18181818;
  }
`;

export const Caption = styled.p`
  color: rgba(235, 235, 245, 0.65);
  font-size: var(--fontSizeQuaternary);
  font-weight: var(--fontSizeTertiary);
  line-height: 1.2307692308;
  margin: 0;

  @media only screen and (min-width: 768px) {
    font-size: var(--fontSizeTertiary);
  }
`;

export const P = styled.p`
  color: var(--secondaryText);
  font-size: var(--fontSizeQuaternary);
  line-height: 1.5294117647;
  letter-spacing: 0.004em;
  margin: 0 0 var(--spaceM);
`;

export const A = styled.a`
  color: var(--primaryBlurText);
  display: flex;
  text-decoration: none;
  align-items: center;
  line-height: 1.2307692308;
  padding: 6px;
  border-radius: 13px;
  font-size: var(--fontSizeQuaternary);
  font-weight: var(--fontWeightSecondary);

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.14);
    cursor: pointer;
    outline: none;
  }
`;
