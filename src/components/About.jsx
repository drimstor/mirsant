import React from "react";
import {
  Sell,
  LocalShipping,
  Inventory,
  ShoppingCart,
  Autorenew
} from "@mui/icons-material";

function About({}) {
  return (
    <div className="wrapper">
      <div className="about">
        <h2>Наши преимущества</h2>
        <div className="about__container">
          <div className="about__item">
            <div className="about__wrap">
              <Sell className="about__logo" />
            </div>
            <p>Выгодные цены</p>
          </div>

          <div className="about__item">
            <div className="about__wrap">
              <LocalShipping className="about__logo" />
            </div>
            <p>Удобная доставка</p>
          </div>

          <div className="about__item">
            <div className="about__wrap">
              <Inventory className="about__logo" />
            </div>
            <p>Самовывоз через <br></br> 2 часа</p>
          </div>

          <div className="about__item">
            <div className="about__wrap">
              <Autorenew className="about__logo" />
            </div>
            <p>Быстрый возврат</p>
          </div>

          <div className="about__item">
            <div className="about__wrap">
              <ShoppingCart className="about__logo" />
            </div>
            <p>Более 30 000 <br></br> товаров</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
