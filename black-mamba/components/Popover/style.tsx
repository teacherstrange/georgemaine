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

export const PopOverContainer = styled.div`
  position: fixed;
  z-index: 11;
  top: 72px;
  margin: 0;
  left: var(--spaceS);
  right: var(--spaceS);
  overflow: hidden;
  border-radius: 26px;
  box-shadow: 0px var(--spaceS) var(--spaceL) 0px rgba(0, 0, 0, 0.65);

  @media only screen and (min-width: 600px) {
    width: 100%;
    max-width: 179px;
    left: unset;
  }
`;

export const PopoverList = styled(motion.ul)`
  margin: 0;
  padding: var(--spaceXS);
  background-color: var(--blurBg);
  -webkit-backdrop-filter: var(--blur);
  backdrop-filter: var(--blur);
  -webkit-filter: var(--saturate);
  filter: var(--saturate);
  z-index: 11;
  min-width: 156px;
`;

export const PopoverListItem = styled.li`
  :not(:first-child) {
    margin-top: var(--spaceXS);
  }
`;
