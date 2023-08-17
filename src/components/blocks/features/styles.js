import styled from "styled-components";
import { Section } from "/src/components/styled";

export const FeaturesStyled = styled(Section)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const UlStyled = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LiStyled = styled.li`
  margin-bottom: 20px;
`;
