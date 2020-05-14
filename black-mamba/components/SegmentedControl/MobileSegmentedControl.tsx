import React from "react";
import {
  MobileContainer,
  MobileActiveItemBackground,
  MobileTabsContainer,
} from "./style";
import { OpaqueButton } from "../Button";

interface Props {
  activeItem: number;
  itemCount: Array<string>;
  onClick?: Function;
}

export default function MobileSegmentedControl({
  activeItem,
  itemCount,
  onClick,
}: Props) {
  return (
    <MobileContainer>
      <MobileTabsContainer>
        <MobileActiveItemBackground
          currentPosition={activeItem}
          itemCount={itemCount.length}
        />
        {itemCount.map((item, index) => {
          return (
            <OpaqueButton
              isAnimated={index === activeItem}
              key={index}
              onClick={() => onClick(index)}
            >
              {item}
            </OpaqueButton>
          );
        })}
      </MobileTabsContainer>
    </MobileContainer>
  );
}
