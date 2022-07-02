import React from "react";

import { CardItem } from "../components";

import img1 from "../assets/items/Pond/Pond__View01.png";
import img2 from "../assets/items/Pond/Pond__View06.png";
import img3 from "../assets/items/Pond/Pond__View05.png";
import img4 from "../assets/items/Pond/Pond_170.png";

function Item1() {
  return (
    <>
      <CardItem
        fresh
        price={"29100"}
        title={'Ванна акриловая MIRSANT "Premium"'}
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

export default Item1;
