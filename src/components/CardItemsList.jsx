import React from "react";
import ItemMini from "./ItemMini";

import { useNavigate, BrowserRouter as Router } from "react-router-dom";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

import item_img from "../assets/items/Pond/Pond__View01.png";
import item_img2 from "../assets/items/Alushta/Алушта_View01.png";
import item_img3 from "../assets/items/Sigma/Sigma__View01.png";
import item_img4 from "../assets/items/Kappa/Массандра_V2__View05.png";

function CardItemsList({ title }) {
  const navigate = useNavigate();
  const redirect = (src) => {
    window.scrollTo(0, 0);
    return navigate(src);
  };

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <ItemMini
      img={item_img}
      title={'Ванна акриловая MIRSANT "Premium"'}
      price={"29 100"}
      fresh
      onClick={() => {
        redirect("/item1");
      }}
    />,
    <ItemMini
      img={item_img2}
      title={'Ванна акриловая MIRSANT "АЛУШТА"'}
      price={"16 900"}
      fresh
      onClick={() => {
        redirect("/item2");
      }}
    />,
    <ItemMini
      img={item_img3}
      title={'Ванна акриловая MIRSANT "Sigma"'}
      price={"74 900"}
      onClick={() => {
        redirect("/item3");
      }}
    />,
    <ItemMini
      img={item_img4}
      title={'Ванна акриловая MIRSANT "МАССАНДРА"'}
      price={"31 600"}
      newPrice={"26 700"}
      fall
      onClick={() => {
        redirect("/item4");
      }}
    />,
  ];

  // const itemsMini = [
  //   <ItemMini
  //     img={items[0].img1}
  //     title={items[0].title}
  //     price={items[0].price}
  //     fresh
  //     onClick={() => {
  //       redirect("/item");
  //     }}
  //   />,
  //   <ItemMini
  //     img={items[1].img1}
  //     title={items[1].title}
  //     price={items[1].price}
  //     fresh
  //     onClick={() => {
  //       redirect("/item");
  //     }}
  //   />,
  //   <ItemMini
  //     img={items[2].img1}
  //     title={items[2].title}
  //     price={items[2].price}
  //     onClick={() => {
  //       redirect("/item");
  //     }}
  //   />,
  //   <ItemMini
  //     img={items[3].img1}
  //     title={items[3].title}
  //     price={items[3].price}
  //     newPrice={items[3].newPrice}
  //     fall
  //     onClick={() => {
  //       redirect("/item");
  //     }}
  //   />,
  // ];

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
