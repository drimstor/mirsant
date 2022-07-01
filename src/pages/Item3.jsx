import React from "react";

import { CardItem } from "../components";

import img1 from "../assets/items/Sigma/Sigma__View01.png";
import img2 from "../assets/items/Sigma/Sigma__View02.jpg";
import img3 from "../assets/items/Sigma/Sigma__View04.png";
import img4 from "../assets/items/Sigma/Sigma__View05.png";

function Item3() {
  return (
    <>
      <CardItem
        price={"74 900"}
        title={'Ванна акриловая MIRSANT "Sigma"'}
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

export default Item3;
