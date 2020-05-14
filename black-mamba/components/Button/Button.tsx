import React from "react";
import { ButtonProps } from "./types";
import * as Styled from "./style";

export default function Button(props: ButtonProps) {
  const { children } = props;
  return <Styled.Button {...props}>{children}</Styled.Button>;
}
