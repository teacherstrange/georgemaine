import styled from "styled-components";

export const H1 = styled.h1`
  color: var(--primaryText);
  font-weight: var(--fontWeightPrimary);
  font-size: var(--fontSizeSecondary);
  line-height: 1.125;
  margin: 0 0 var(--spaceM);
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
  font-size: 2em;
  font-weight: var(--fontWeightTertiary);
  line-height: 1.5294117647;
  margin: 0 0 var(--spaceM);

  @media only screen and (min-width: 600px) {
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

export const Label = styled.a`
  color: var(--primaryText);
  font-weight: var(--fontWeightSecondary);
  font-size: var(--fontSizeQuaternary);
  line-height: 1.5294117647;
  letter-spacing: 0.004em;
  margin: 0 0 var(--spaceS);
`;
