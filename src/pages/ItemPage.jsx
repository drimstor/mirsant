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
      <CardItem fresh price={'29 100'} title={'Ванна акриловая MIRSANT "Premium"'} productcode={'УТ000065135'} fabric={'MIRSANT'} model={'кВО17070'} />
      <Footer />
    </>
  );
}

export default ItemPage;
