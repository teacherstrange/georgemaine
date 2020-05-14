import React from "react";
import { ButtonProps } from "./types";
import * as Styled from "./style";

export default function OpaqueButton(props: ButtonProps) {
  const { children } = props;
  return <Styled.OpaqueButton {...props}>{children}</Styled.OpaqueButton>;
}
