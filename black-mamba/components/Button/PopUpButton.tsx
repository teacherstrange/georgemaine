import React from "react";

import { Button, PopUpButtonChevron } from "./style";
import Icon from "../Icon";

interface PopUpButtonProps {
  children: React.ReactNode;
  onClick: Function;
  animated: boolean;
}

export default function PopUpButton({
  children,
  onClick,
  animated,
}: PopUpButtonProps) {
  return (
    <Button onClick={onClick}>
      {children}
      <PopUpButtonChevron animated={animated}>
        <Icon glyph={"ChevronDown"} />
      </PopUpButtonChevron>
    </Button>
  );
}
