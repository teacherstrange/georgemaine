import styled from "styled-components";
import { motion } from "framer-motion";

export const StickyNav = styled.nav`
  max-width: 290px;
  margin: 60px auto 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;

  @media only screen and (max-width: 599px) {
    position: absolute;

    margin-top: 0;
    left: 0;
    right: 0;
    bottom: 36px;
  }
`;

export const StickyNavList = styled(motion.ul)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spaceXXS) var(--spaceXS);
  margin: 0;
  border-radius: var(--spaceL);
  background-color: #f2f2f2;
  transition: background-color 0.15s;
`;
