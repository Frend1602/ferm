import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Button from "/src/components/ui/button/button";
import { StyledHeader } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Button minWidth={260} link="#">
        Купить
      </Button>
    </StyledHeader>
  );
}

export default Header;
