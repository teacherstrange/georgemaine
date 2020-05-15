import styled from "styled-components";

export const H1 = styled.h1`
  color: var(--primaryText);
  font-weight: var(--fontWeightPrimary);
  font-size: var(--fontSizeSecondary);
  line-height: 1.125;
  margin: 0 0 var(--spaceS);
  letter-spacing: -0.005em;

  @media only screen and (min-width: 600px) {
    font-size: var(--fontSizePrimary);
    line-height: 1;
  }
`;

export const H2 = styled.h2`
  color: var(--primaryText);
  font-weight: var(--fontWeightPrimary);
  font-size: var(--fontSizeTertiary);
  line-height: 1.18181818;
  letter-spacing: 0;
  margin: 0 0 var(--spaceM);

  @media only screen and (min-width: 600px) {
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

  @media only screen and (min-width: 600px) {
    font-size: var(--fontSizeTertiary);
    line-height: 1.18181818;
  }
`;

export const Caption = styled.p`
  color: var(--secondaryText);
  font-size: 2.1em;
  font-weight: var(--fontSizeTertiary);
  line-height: 1.5294117647;
  margin: 0;
`;

export const P = styled.p`
  color: var(--secondaryText);
  font-size: var(--fontSizeQuaternary);
  line-height: 1.5294117647;
  letter-spacing: 0.004em;
  margin: 0 0 var(--spaceM);
`;

export const A = styled.a`
  color: var(--primaryText);
  display: flex;
  text-decoration: none;
  align-items: center;
  line-height: 1.125rem;
  padding: 6px;
  border-radius: 13px;
  font-size: 15px;
  font-weight: var(--fontWeightPrimary);

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.14);
    cursor: pointer;
    outline: none;
  }
`;
