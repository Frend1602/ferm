import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Cart from "/src/components/ui/cart/cart";
import Button from "/src/components/ui/button/button";
import { FeaturesStyled, UlStyled, LiStyled } from "./styles";

function Features({ features }) {
  return features && features.length ? (
    <FeaturesStyled>
      <Title size={TitleSize.SMALL}>Почему фермерские продукты лучше?</Title>
      <UlStyled>
        {features.map((feature) => (
          <LiStyled>
            <Cart {...feature} />
          </LiStyled>
        ))}
      </UlStyled>
      <Button maxWidth="260px" link="#">
        Купить
      </Button>
    </FeaturesStyled>
  ) : null;
}

export default Features;
