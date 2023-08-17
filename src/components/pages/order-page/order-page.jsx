import React, { useState } from "react";
import {
  StyledOrder,
  LeftColumn,
  Panel,
  AdressInput,
  PriceLabel,
  PriceValue,
  ProductSwiper,
  CheckboxLabel
} from "./styles";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import ProductCart from "/src/components/ui/product-cart/product-cart";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function Order({ products }) {
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  return products && products.length ? (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel>
          <Title as="h2" size={TitleSize.EXTRA_SMALL}>
            Выберите продукты
          </Title>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.name
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
          />
        </Panel>
        <Panel>
          <Title size={TitleSize.EXTRA_SMALL}>Сделать заказ</Title>
          <AdressInput placeholder="Введите адрес доставки" />
          <PriceLabel>Цена</PriceLabel>
          <PriceValue>400</PriceValue>
          <Button>Купить</Button>
        </Panel>
      </LeftColumn>
      <ProductSwiper
        onSwiper={setSwiperRef}
        paceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fanction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCart product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </StyledOrder>
  ) : null;
}

export default Order;
