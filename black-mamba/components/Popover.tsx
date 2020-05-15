import styled from "styled-components";
import { A } from "./Typograhy";
import Icon from "./Icon";
import { ContactListData } from "../../data/index";
import { motion, AnimatePresence } from "framer-motion";

export const MenuBlocker = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 99;
`;

const PopoverList = styled(motion.ul)`
  padding: 6px;
  overflow: hidden;
  border-radius: 19px;
  box-shadow: 0px 20px 40px -12px rgba(0, 0, 0, 0.25);
  background-color: #333;
  position: absolute;
  z-index: 100;
  top: 50px;
  right: 20px;
  min-width: 156px;
  margin: 0;
`;

const PopoverListItem = styled.li`
  :not(:first-child) {
    margin-top: 6px;
  }
`;

const PopoverListItemLabel = styled.span`
  display: flex;
  margin-left: 10px;
`;

export default function Popover({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <PopoverList
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -8, opacity: 0 }}
        >
          {ContactListData.map((data, index) => {
            return (
              <PopoverListItem key={index} tabindex={index}>
                <A
                  href={data.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <Icon glyph={data.name} />
                  <PopoverListItemLabel>{data.name}</PopoverListItemLabel>
                </A>
              </PopoverListItem>
            );
          })}
        </PopoverList>
      )}
    </AnimatePresence>
  );
}
