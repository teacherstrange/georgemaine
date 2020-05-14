import React from "react";

export type ButtonProps = {
  children: React.ReactNode | string;
  type?: string;
  onClick?: Function;
  style?: object;
  isAnimated: boolean;
};
