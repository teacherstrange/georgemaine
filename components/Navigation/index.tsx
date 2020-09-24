import { StickyNavList, StickyNav } from "./style";
import { Button } from "../Button";
import { motion } from "framer-motion";

type MenuItemProps = {
  name: string;
  value: number;
};

// Declare Props
interface StickyNavProps {
  name: string;
  role: string;
  list: MenuItemProps[];
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
        initial={{
          maxWidth: 316,
        }}
        animate={{
          maxWidth: 803,
        }}
        transition={{
          maxWidth: {
            type: "tween",
            duration: 1.1,
          },
        }}
      >
        {list.map((Page, index) => {
          return (
            <motion.li
              key={index}
              onClick={() => onClick(index === 2 ? 5 : index === 3 ? 6 : index)}
            >
              <Button
                style={{
                  opacity: index != convertedActive && 0.6,
                }}
              >
                {Page.name}
              </Button>
            </motion.li>
          );
        })}
      </StickyNavList>
    </StickyNav>
  );
}
