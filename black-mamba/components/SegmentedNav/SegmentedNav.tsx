import React from "react";
import {
  SegmentNavDesktopTabList,
  SegmentNavSelectionBackgroundVariants,
  SegmentNavDesktopItem,
  SegmentNavSelectionBackground,
} from "./style";
import { MenuItem } from "../../../data";

interface Props {
  activeMenuItem: number;
  menuList: MenuItem[];
  onClick?: Function;
}

export default function SegmentedNav({
  activeMenuItem,
  menuList,
  onClick,
}: Props) {
  return (
    <SegmentNavDesktopTabList>
      <SegmentNavSelectionBackground
        menuList={menuList.length}
        initial="first"
        variants={SegmentNavSelectionBackgroundVariants}
        animate={
          activeMenuItem === 1
            ? "second"
            : activeMenuItem === 2
            ? "third"
            : activeMenuItem === 3
            ? "fourth"
            : activeMenuItem === 4
            ? "fifth"
            : "first"
        }
        transition={{
          duration: 0.3,
          bezierCurve: "0.1, 0, 0, 1",
        }}
      />
      {menuList.map((menuItem, index) => {
        return (
          <SegmentNavDesktopItem
            isAnimated={index === activeMenuItem}
            key={index}
            onClick={() => onClick(index)}
          >
            {menuItem.name}
          </SegmentNavDesktopItem>
        );
      })}
    </SegmentNavDesktopTabList>
  );
}
