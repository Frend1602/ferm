import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledFooter, FooterCopyr } from "./styles";

function Header() {
  return (
    <StyledFooter>
      <Logo />
      <FooterCopyr>Создано 2023</FooterCopyr>
    </StyledFooter>
  );
}

export default Header;
