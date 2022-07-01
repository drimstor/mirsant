import React from "react";

import { Slider, About, CardItemsList } from "../components";

function Home() {

  return (
    <>
      <Slider />
      <CardItemsList title={"Хиты продаж"} />
      <About />
      <CardItemsList title={"Новинки на сайте"} />
    </>
  );
}

export default Home;
