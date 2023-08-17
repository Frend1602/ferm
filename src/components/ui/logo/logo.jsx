import React from "react";
import { ReactComponent as LogoImg } from "/src/assets/logo.svg";
import { LogoLink, LogoText } from "./styles";

function Logo() {
  return (
    <LogoLink>
      <LogoImg />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  );
}

export default Logo;
