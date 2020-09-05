import styled from "styled-components";
import { motion } from "framer-motion";
import { A } from "../Typography";

export const PopoverMenuBlocker = styled(motion.div)`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 10;
  background-color: var(--overlayBg);
`;

export const PopOverContainer = styled(motion.div)`
  position: fixed;
  z-index: 11;
  top: 72px;
  margin: 0;
  left: 24px;
  right: 24px;
  overflow: hidden;
  border-radius: 22px;
  box-shadow: 0px var(--spaceS) var(--spaceL) 0px rgba(0, 0, 0, 0.25);

  @media only screen and (min-width: 600px) {
    width: 100%;
    max-width: 179px;
    left: unset;
  }
`;

export const PopoverList = styled.ul`
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

export const PopOverMenuItem = styled(A)`
  padding: 0 12px;
  line-height: 2.1538461538;
`;

export const PopoverListItem = styled.li`
  :not(:first-child) {
    margin-top: var(--spaceXXS);
  }
`;
