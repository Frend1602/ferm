import React from "react";
import { StyledTitle } from "./styles";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  EXTRA_SMALL: "extra_small",
  DEFAULT: ""
};

function Title({ children, size, level = 1 }) {
  return (
    <StyledTitle as={`h${level}`} $size={size}>
      {children}
    </StyledTitle>
  );
}

export default Title;
