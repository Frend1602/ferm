import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import Order from "/src/components/pages/order-page/order-page";
import { StyledMain } from "./styles";
import { Outlet } from "react-router-dom";

function PageWrapper({ products }) {
  return (
    <>
      <Header />
      <StyledMain>
        <Order products={products} />
        <MainPage>
          <Outlet />
        </MainPage>
      </StyledMain>
      <Footer />
    </>
  );
}

export default PageWrapper;
