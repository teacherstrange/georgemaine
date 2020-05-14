import React from "react";
import { Container, ActiveItemBackground } from "./style";
import { OpaqueButton } from "../Button";

interface Props {
  activeItem: number;
  itemCount: Array<string>;
  onClick?: Function;
}

export default function SegmentedControl({
  activeItem,
  itemCount,
  onClick,
}: Props) {
  return (
    <Container>
      <ActiveItemBackground
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
    </Container>
  );
}
