import React from "react";
import {
  Header,
  Categories,
  Slider,
  ListItems,
  Footer,
  About,
  CardItem
} from "../components";

function ItemPage() {
  return (
    <>
      <Header />
      <Categories />
      <CardItem fresh title={'Ванна акриловая MIRSANT "Premium"'} />
      <Footer />
    </>
  );
}

export default ItemPage;
