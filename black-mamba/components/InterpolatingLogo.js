import React from "react";
import styled, { keyframes } from "styled-components";

export function InterpolatingLogo() {
  return (
    <InterpolatingLogoContainer>
      <InterpolatingLogoContainerMask />
      <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
        <path
          d="M 60 12 L 36 12 C 22.745 12 12 22.745 12 36 L 12 37.5 C 12 49.926 22.074 60 34.5 60 L 34.5 60 C 46.926 60 57 49.926 57 37.5 L 57 24 L 48 24 L 36 24 C 29.373 24 24 29.373 24 36 L 24 37.5 C 24 43.299 28.701 48 34.5 48 L 34.5 48 C 40.299 48 45 43.299 45 37.5 L 45 36 L 36 36"
          fill="transparent"
          strokeWidth="6"
          stroke={`var(--blendingBackgroundFill)`}
        ></path>
        <path
          d="M 36 33 C 37.657 33 39 34.343 39 36 C 39 37.657 37.657 39 36 39 C 34.343 39 33 37.657 33 36 C 33 34.343 34.343 33 36 33 Z"
          fill={`var(--blendingBackgroundFill)`}
        ></path>
      </svg>
    </InterpolatingLogoContainer>
  );
}

const Interpolation = keyframes`
  0% { background-position: 0% 100%;}
  25% { background-position: 0% 75%;}
  50% { background-position: 0% 50%;}
  75% { background-position: 0% 25%;}
  100% { background-position: 0% 0%;}
`;

const InterpolatingLogoContainer = styled.div`
  background-color: var(--background);
  margin: 0 auto var(--spaceM);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InterpolatingLogoContainerMask = styled.div`
  position: absolute;
  background: linear-gradient(
    var(--purple),
    var(--red),
    var(--yellow),
    var(--green),
    var(--blue)
  );
  background-size: 300% 300%;
  width: 72px;
  height: 72px;
  animation: ${Interpolation} 7s infinite alternate;
  mix-blend-mode: var(--blendingBackground);
`;
