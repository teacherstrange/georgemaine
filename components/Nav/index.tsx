import { NavList, NavContainer } from "./style";
import { Link } from "../Link";
import React from "react";

// Create Function
export function Nav({ NavItems }) {
  return (
    <NavContainer>
      <NavList
        whileHover={{ backgroundColor: "#f7f7f7" }}
        whileTap={{ backgroundColor: "#e5e5e5" }}
      >
        {NavItems.map((NavItem: any, index: React.ReactText) => {
          React.useEffect(() => {
            console.log("NavItem:", NavItem);
          });
          return (
            <li key={index}>
              <a href={NavItem.id}>{NavItem.name}</a>
            </li>
          );
        })}
      </NavList>
    </NavContainer>
  );
}
