import React from "react";
import { Container, ActiveItemBackground } from "./style";
import { OpaqueButton } from "../Button";
import { MenuItem } from "../../../data";

interface Props {
  activeMenuItem: number;
  menuList: MenuItem[];
  onClick?: Function;
}

export default function SegmentedControl({
  activeMenuItem,
  menuList,
  onClick,
}: Props) {
  return (
    <Container>
      <ActiveItemBackground
        currentPosition={activeMenuItem}
        menuList={menuList.length}
      />
      {menuList.map((menuItem, index) => {
        return (
          <OpaqueButton
            isAnimated={index === activeMenuItem}
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
