import React from "react";
import {
  Header,
  Categories,
  Slider,
  ListItems,
  Footer,
  About,
} from "../components";

function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Slider />
      <ListItems title={"Хиты продаж"} />
      <About />
      <ListItems title={"Новинки на сайте"} />
      <Footer />
    </>
  );
}

export default Home;
