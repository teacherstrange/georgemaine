import { StickyNavList, StickyNav } from "./style";
import { Button } from "../Button";
import React from "react";

// Declare Props
interface StickyNavProps {
  name: string;
  role: string;
  list: string[];
  button: string;
  onClick: Function;
  active: number;
}

// Create Function
export function StickyNavigation({ list, onClick, active }: StickyNavProps) {
  const convertedActive =
    active >= 1 && active <= 4
      ? 1
      : active === 5
      ? 2
      : active === 6
      ? 3
      : active;

  return (
    <StickyNav>
      <StickyNavList
        whileHover={{ backgroundColor: "#f7f7f7" }}
        whileTap={{ backgroundColor: "#e5e5e5" }}
      >
        {list.map((ListItem, index) => {
          return (
            <li
              key={index}
              onClick={() => onClick(index === 2 ? 5 : index === 3 ? 6 : index)}
            >
              <Button style={{ opacity: index != convertedActive && 0.6 }}>
                {ListItem}
              </Button>
            </li>
          );
        })}
      </StickyNavList>
    </StickyNav>
  );
}
