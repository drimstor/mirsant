import React from "react";

import { CardItem } from "../components";

import img1 from "../assets/items/Alushta/Алушта_View01.png";
import img2 from "../assets/items/Alushta/Алушта_View02.png";
import img3 from "../assets/items/Alushta/Алушта_View03.png";
import img4 from "../assets/items/Alushta/Алушта_View04.png";

function Item2() {
  return (
    <>
      <CardItem
        fresh
        price={"16 900"}
        title={'Ванна акриловая MIRSANT "АЛУШТА"'}
        productcode={"УТ000065135"}
        fabric={"MIRSANT"}
        model={"кВО17070"}
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
      />
    </>
  );
}

export default Item2;
