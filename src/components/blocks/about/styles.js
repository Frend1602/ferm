import styled from "styled-components";
import { Section } from "/src/components/styled";
import aboutBG from "/src/assets/aboutBg.svg";
import aboutBG2 from "/src/assets/aboutBg2.svg";

export const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${(props) => props.theme.colorBlue};
  width: 1280px;
  height: 600px;
  padding: 183px 652px 315px 90px;
  box-sizing: border-box;
  overflow: hidden;

  &::after {
    position: absolute;
    bottom: 0;
    right: -90px;
    display: block;
    content: "";
    width: 446px;
    height: 446px;
    margin: auto;
    background-repeat: no-repeat;
    background-image: url(${aboutBG});
  }

  &::before {
    position: absolute;
    bottom: 10;
    right: 0;
    display: block;
    content: "";
    width: 446px;
    height: 446px;
    margin: auto;
    background-repeat: no-repeat;
    background-image: url(${aboutBG2});
  }
`;

export const Paragraph = styled.p`
  color: #333;
  text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
