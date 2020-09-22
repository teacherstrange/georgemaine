import { StickyNavList, StickyNav } from "./style";
import { Button } from "../Button";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <StickyNav
      style={{
        maxWidth: list.length > 4 ? 803 : 316,
      }}
    >
      {list.length > 5 && (
        <AnimatePresence>
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
            <motion.li onClick={() => onClick(list[0].value)}>
              <Button
                style={{
                  opacity:
                    list.length > 4 && list[0].value !== active
                      ? 0.6
                      : list.length > 5 && list[0].value === active
                      ? 1
                      : list[0].value != convertedActive && 0.6,
                }}
              >
                {list[0].name}
              </Button>
            </motion.li>
            <motion.li onClick={() => onClick(list[1].value)}>
              <Button
                style={{
                  opacity:
                    list.length > 4 && list[1].value !== active
                      ? 0.6
                      : list.length > 5 && list[1].value === active
                      ? 1
                      : list[1].value != convertedActive && 0.6,
                }}
              >
                {list[1].name}
              </Button>
            </motion.li>
            <motion.li onClick={() => onClick(list[2].value)}>
              <Button
                style={{
                  opacity:
                    list.length > 4 && list[2].value !== active
                      ? 0.6
                      : list.length > 5 && list[2].value === active
                      ? 1
                      : list[2].value != convertedActive && 0.6,
                }}
              >
                {list[2].name}
              </Button>
            </motion.li>
            <motion.li onClick={() => onClick(list[3].value)}>
              <Button
                style={{
                  opacity:
                    list.length > 4 && list[3].value !== active
                      ? 0.6
                      : list.length > 5 && list[3].value === active
                      ? 1
                      : list[3].value != convertedActive && 0.6,
                }}
              >
                {list[3].name}
              </Button>
            </motion.li>
            <motion.li onClick={() => onClick(list[4].value)}>
              <Button
                style={{
                  opacity:
                    list.length > 4 && list[4].value !== active
                      ? 0.6
                      : list.length > 5 && list[4].value === active
                      ? 1
                      : list[4].value != convertedActive && 0.6,
                }}
              >
                {list[4].name}
              </Button>
            </motion.li>
            <motion.li onClick={() => onClick(list[5].value)}>
              <Button
                style={{
                  opacity:
                    list.length > 4 && list[5].value !== active
                      ? 0.6
                      : list.length > 5 && list[5].value === active
                      ? 1
                      : list[5].value != convertedActive && 0.6,
                }}
              >
                {list[5].name}
              </Button>
            </motion.li>
            <motion.li onClick={() => onClick(list[6].value)}>
              <Button
                style={{
                  opacity:
                    list.length > 4 && list[6].value !== active
                      ? 0.6
                      : list.length > 5 && list[6].value === active
                      ? 1
                      : list[6].value != convertedActive && 0.6,
                }}
              >
                {list[6].name}
              </Button>
            </motion.li>
          </StickyNavList>
        </AnimatePresence>
      )}
      {list.length <= 4 && (
        <StickyNavList
          whileHover={{ backgroundColor: "#f7f7f7" }}
          whileTap={{ backgroundColor: "#e5e5e5" }}
        >
          <motion.li onClick={() => onClick(list[0].value)}>
            <Button
              style={{
                opacity:
                  list.length > 4 && list[0].value !== active
                    ? 0.6
                    : list.length > 5 && list[0].value === active
                    ? 1
                    : list[0].value != convertedActive && 0.6,
              }}
            >
              {list[0].name}
            </Button>
          </motion.li>
          <motion.li onClick={() => onClick(list[1].value)}>
            <Button
              style={{
                opacity:
                  list.length > 4 && list[1].value !== active
                    ? 0.6
                    : list.length > 5 && list[1].value === active
                    ? 1
                    : list[1].value != convertedActive && 0.6,
              }}
            >
              {list[1].name}
            </Button>
          </motion.li>
          <motion.li onClick={() => onClick(list[2].value)}>
            <Button
              style={{
                opacity:
                  list.length > 4 && list[2].value !== active
                    ? 0.6
                    : list.length > 5 && list[2].value === active
                    ? 1
                    : list[2].value != convertedActive && 0.6,
              }}
            >
              {list[2].name}
            </Button>
          </motion.li>
          <motion.li onClick={() => onClick(list[3].value)}>
            <Button
              style={{
                opacity:
                  list.length > 4 && list[3].value !== active
                    ? 0.6
                    : list.length > 5 && list[3].value === active
                    ? 1
                    : list[3].value != convertedActive && 0.6,
              }}
            >
              {list[3].name}
            </Button>
          </motion.li>
        </StickyNavList>
      )}
    </StickyNav>
  );
}
