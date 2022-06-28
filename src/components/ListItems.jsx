import React from "react";
import ItemMini from "./ItemMini";

import item_img from "../assets/items/Pond/Pond__View01.png"
import item_img2 from "../assets/items/Alushta/Алушта_View01.png"
import item_img3 from "../assets/items/Sigma/Sigma__View01.png"
import item_img4 from "../assets/items/Kappa/Массандра_V2__View05.png"

function ListItems({ title }) {
  return (
    <div className="wrapper">
      <div className="list-items">
        <div className="list-items__title">
          <h2>{title}</h2>
        </div>
        <div className="list-items__wrap">
        <ItemMini img={item_img} title={'Ванна акриловая MIRSANT "Premium"'} price={'29100'} fresh/>
        <ItemMini img={item_img2} title={'Ванна акриловая MIRSANT "АЛУШТА"'} price={'16900'} fresh/>
        <ItemMini img={item_img3} title={'Ванна акриловая MIRSANT "Sigma"'} price={'74900'} />
        <ItemMini img={item_img4} title={'Ванна акриловая MIRSANT "МАССАНДРА"'} price={'31600'} newPrice={'26700'} fall/>
        </div>
      </div>
    </div>
  );
}

export default ListItems;
