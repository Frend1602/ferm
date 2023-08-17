import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  display: flex;
  /* min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")}; */
  width: 260px;
  min-height: 60px;
  background: #fc9b27;
  border: none;
  color: ${(props) => props.theme.colorWhite};
  font-family: Inter;
  font-size: 18px;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  &:hover {
    background: #fc7427;
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
  }

  &:active {
    box-shadow: none;
  }
`;
