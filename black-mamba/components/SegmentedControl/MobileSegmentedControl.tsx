import React from "react";
import {
  MobileContainer,
  MobileActiveItemBackground,
  MobileTabsContainer,
} from "./style";
import { OpaqueButton } from "../Button";
import { MenuItem } from "../../../data";

interface Props {
  activeItem: number;
  menuList?: MenuItem[];
  onClick?: Function;
}

export default function MobileSegmentedControl({
  activeItem,
  menuList,
  onClick,
}: Props) {
  return (
    <MobileContainer>
      <MobileTabsContainer>
        <MobileActiveItemBackground
          currentPosition={activeItem}
          menuList={menuList.length}
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
      </MobileTabsContainer>
    </MobileContainer>
  );
}
