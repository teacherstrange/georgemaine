import React from "react";
import { ButtonProps } from "./types";
import * as Styled from "./style";
import Icon from "../Icon";

export default function PopUpButton(props: ButtonProps) {
  const { children, isAnimated } = props;
  return (
    <Styled.Button {...props}>
      {children}
      <Styled.PopUpButtonChevron animated={isAnimated}>
        <Icon glyph={"ChevronDown"} size={12} />
      </Styled.PopUpButtonChevron>
    </Styled.Button>
  );
}
