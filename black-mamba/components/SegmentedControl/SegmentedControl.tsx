import React from "react";
import {
  Container,
  MobileTabsContainer,
  MobileActiveItemVariants,
  DesktopOpaqueButton,
  MobileActiveItemBackground,
} from "./style";
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
      <MobileActiveItemBackground
        menuList={menuList.length}
        initial="first"
        variants={MobileActiveItemVariants}
        animate={
          activeMenuItem === 1
            ? "second"
            : activeMenuItem === 2
            ? "third"
            : activeMenuItem === 3
            ? "fourth"
            : "first"
        }
        transition={{
          duration: 0.3,
          bezierCurve: "0.1, 0, 0, 1",
        }}
      />
      {menuList.map((menuItem, index) => {
        return (
          <DesktopOpaqueButton
            isAnimated={index === activeMenuItem}
            key={index}
            onClick={() => onClick(index)}
          >
            {menuItem.name}
          </DesktopOpaqueButton>
        );
      })}
    </Container>
  );
}
