import React from "react";
import {
  MobileContainer,
  MobileActiveItemBackground,
  MobileTabsContainer,
} from "./style";
import { OpaqueButton } from "../Button";
import { MenuItem } from "../../../data";

interface Props {
  activeMenuItem: number;
  menuList?: MenuItem[];
  onClick?: Function;
}

export default function MobileSegmentedControl({
  activeMenuItem,
  menuList,
  onClick,
}: Props) {
  return (
    <MobileContainer>
      <MobileTabsContainer>
        <MobileActiveItemBackground
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
      </MobileTabsContainer>
    </MobileContainer>
  );
}
