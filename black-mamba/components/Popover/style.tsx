import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuBlocker = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 10;
`;

export const PopoverList = styled(motion.ul)`
  padding: 6px;
  overflow: hidden;
  border-radius: 19px;
  background-color: var(--blurBg);
  -webkit-backdrop-filter: var(--blur);
  backdrop-filter: var(--blur);
  -webkit-filter: var(--saturate);
  filter: var(--saturate);
  position: fixed;
  z-index: 11;
  top: 50px;
  right: 20px;
  min-width: 156px;
  margin: 0;
`;

export const PopoverListItem = styled.li`
  :not(:first-child) {
    margin-top: 6px;
  }
`;

export const PopoverListItemLabel = styled.span`
  display: flex;
  margin-left: 10px;
`;
