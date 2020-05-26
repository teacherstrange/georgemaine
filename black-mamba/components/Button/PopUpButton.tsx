import React from "react";

import { Button, PopUpButtonChevron } from "./style";
import Icon from "../Icon";

export default function PopUpButton(props) {
  const { children, onClick, animated } = props;
  return (
    <Button onClick={onClick}>
      {children}
      <PopUpButtonChevron animated={animated}>
        <Icon glyph={"ChevronDown"} />
      </PopUpButtonChevron>
    </Button>
  );
}
