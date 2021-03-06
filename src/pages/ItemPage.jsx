import React from "react";

import { CardItem } from "../components";

import img1 from "../assets/items/Alushta/Алушта_View01.png";
import img2 from "../assets/items/Alushta/Алушта_View02.png";
import img3 from "../assets/items/Alushta/Алушта_View03.png";
import img4 from "../assets/items/Alushta/Алушта_View04.png";

function ItemPage({ items }) {
  // console.log(items[3].price)
  return (
    <>
      <CardItem
        fresh
        price={"29 100"}
        title={'Ванна акриловая MIRSANT "Premium"'}
        productcode={"УТ000065135"}
        fabric={"MIRSANT"}
        model={"кВО17070"}
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
      />

      {/* <CardItem
        fresh={items[3].isFresh}
        price={items[3].price}
        title={items[3].title}
        productcode={items[3].productcode}
        fabric={items[3].fabric}
        model={items[3].model}
        img1={items[3].img1}
        img2={items[3].img2}
        img3={items[3].img3}
        img4={items[3].img4}
      /> */}
    </>
  );
}

export default ItemPage;
