import React from "react";

import {
  Header,
  Categories,
  Slider,
  Footer,
  About,
  CardItemsList
} from "../components";


function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Slider />
      <CardItemsList title={"Хиты продаж"} />
      <About />
      <CardItemsList title={"Новинки на сайте"} />
      <Footer />
    </>
  );
}

export default Home;
