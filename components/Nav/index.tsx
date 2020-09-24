import { NavList, NavContainer } from "./style";
import { Button } from "../Button";
import { motion } from "framer-motion";

// Declare Props
type NavItemProps = {
  name: string;
};

interface NavProps {
  list: NavItemProps[];
  onClick: Function;
  current: number;
}

// Create Function
export function Nav({ list, onClick, current }: NavProps) {
  const convertedCurrent =
    current >= 1 && current <= 4
      ? 1
      : current === 5
      ? 2
      : current === 6
      ? 3
      : current;

  return (
    <NavContainer>
      <NavList
        whileHover={{ backgroundColor: "#f7f7f7" }}
        whileTap={{ backgroundColor: "#e5e5e5" }}
      >
        {list.map((NavItem, index) => {
          return (
            <motion.li
              key={index}
              onClick={() => onClick(index === 2 ? 5 : index === 3 ? 6 : index)}
            >
              <Button
                style={{
                  opacity: index != convertedCurrent && 0.6,
                }}
              >
                {NavItem.name}
              </Button>
            </motion.li>
          );
        })}
      </NavList>
    </NavContainer>
  );
}
