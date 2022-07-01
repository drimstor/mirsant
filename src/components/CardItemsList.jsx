import React from "react";
import ItemMini from "./ItemMini";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import item_img from "../assets/items/Pond/Pond__View01.png";
import item_img2 from "../assets/items/Alushta/Алушта_View01.png";
import item_img3 from "../assets/items/Sigma/Sigma__View01.png";
import item_img4 from "../assets/items/Kappa/Массандра_V2__View05.png";

function CardItemsList({ title }) {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <ItemMini
      img={item_img}
      title={'Ванна акриловая MIRSANT "Premium"'}
      price={"29 100"}
      fresh
    />,
    <ItemMini
      img={item_img2}
      title={'Ванна акриловая MIRSANT "АЛУШТА"'}
      price={"16 900"}
      fresh
    />,
    <ItemMini
      img={item_img3}
      title={'Ванна акриловая MIRSANT "Sigma"'}
      price={"74 900"}
    />,
    <ItemMini
      img={item_img4}
      title={'Ванна акриловая MIRSANT "МАССАНДРА"'}
      price={"31 600"}
      newPrice={"26 700"}
      fall
    />,
    <ItemMini
      img={item_img}
      title={'Ванна акриловая MIRSANT "Premium"'}
      price={"29 100"}
      fresh
    />,
    <ItemMini
      img={item_img2}
      title={'Ванна акриловая MIRSANT "АЛУШТА"'}
      price={"16 900"}
      fresh
    />,
    <ItemMini
      img={item_img3}
      title={'Ванна акриловая MIRSANT "Sigma"'}
      price={"74 900"}
    />,
    <ItemMini
      img={item_img4}
      title={'Ванна акриловая MIRSANT "МАССАНДРА"'}
      price={"31 600"}
      newPrice={"26 700"}
      fall
    />,
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  return (
    <div className="wrapper">
      <div className="list-items">
        <div className="card-item__recommend">
          <h2>{title}</h2>
          <AliceCarousel
            infinite
            disableDotsControls
            className={"mini-carousel"}
            mouseTracking
            items={items}
            responsive={responsive}
          />
        </div>
      </div>
    </div>
  );
}

export default CardItemsList;
