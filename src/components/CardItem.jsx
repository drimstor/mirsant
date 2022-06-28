import React from "react";

import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Typography, Link } from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// import Magnifier from "react-magnifier";

import img1 from "../assets/items/Alushta/Алушта_View01.png";
import img2 from "../assets/items/Alushta/Алушта_View02.png";
import img3 from "../assets/items/Alushta/Алушта_View03.png";

function CardItem({ fresh, img, fall, title, price, newPrice }) {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      href="/"
      fontSize={13}
      fontFamily={"Gilroy-Medium"}
      // onClick={handleClick}
    >
      Главная
    </Link>,
    <Link
      underline="hover"
      key="2"
      href="/bath/"
      fontSize={13}
      fontFamily={"Gilroy-Medium"}
      //   onClick={handleClick}
    >
      Ванны
    </Link>,
    <Typography
      key="3"
      color="rgb(150, 150, 150)"
      fontSize={13}
      fontFamily={"Gilroy-Medium"}
    >
      Ванна акриловая MIRSANT "Premium"
    </Typography>,
  ];

  return (
    <div className="wrapper">
      <Breadcrumbs
        className="breadcrumbs"
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <div className="card-item__title">
      {fresh && <div className="item-mini--mod item-mini--fresh">новинка</div>}
      {fall && (
        <div className="item-mini--mod item-mini--fall">цена снижена</div>
      )}
        <h1>{title}</h1>
      </div>
      <div className="card-item">
        <div className="card-item__img">
          <Carousel
            showStatus={false}
            showIndicators={false}
            swipeable
            axis={"vertical"}
            showArrows={false}
          >
            <div>
              <img src={img1} />
            </div>
            <div>
              <img src={img2} />
            </div>
            <div>
              <img src={img3} />
            </div>
          </Carousel>
          {/* <Magnifier src={img1} width={500} /> */}
        </div>
      </div>
    </div>
  );
}

export default CardItem;
