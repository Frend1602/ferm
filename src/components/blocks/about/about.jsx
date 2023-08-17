import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { StyledSection, Paragraph } from "./styles";

function About() {
  return (
    <StyledSection>
      <Title size={TitleSize.BIG} level={1}>
        Магазин фермерских продуктов с доставкой
      </Title>
      <Paragraph>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </Paragraph>
    </StyledSection>
  );
}

export default About;
