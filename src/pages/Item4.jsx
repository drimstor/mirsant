import React from "react";

import { CardItem } from "../components";

import img1 from "../assets/items/Kappa/Массандра_V2__View05.png";
import img2 from "../assets/items/Kappa/Массандра_V2__View01.png";
import img3 from "../assets/items/Kappa/Массандра_V2__View02.png";
import img4 from "../assets/items/Kappa/Массандра_View03.png";

function Item4() {
  return (
    <>
      <CardItem
        price={"31600"}
        newPrice={"26700"}
        title={'Ванна акриловая MIRSANT "МАССАНДРА"'}
        productcode={"УТ000065135"}
        fabric={"MIRSANT"}
        model={"кВО17070"}
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
        fall
      />
    </>
  );
}

export default Item4;
