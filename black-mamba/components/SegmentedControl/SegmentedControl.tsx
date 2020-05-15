import React from "react";
import { Container, ActiveItemBackground } from "./style";
import { OpaqueButton } from "../Button";
import { MenuItem } from "../../../data";

interface Props {
  activeItem: number;
  menuList: MenuItem[];
  onClick?: Function;
}

export default function SegmentedControl({
  activeItem,
  menuList,
  onClick,
}: Props) {
  return (
    <Container>
      <ActiveItemBackground
        currentPosition={activeItem}
        itemCount={menuList.length}
      />
      {menuList.map((menuItem, index) => {
        return (
          <OpaqueButton
            isAnimated={index === activeItem}
            key={index}
            onClick={() => onClick(index)}
          >
            {menuItem.name}
          </OpaqueButton>
        );
      })}
    </Container>
  );
}
