import React from "react";
import footer_img from "../assets/img/КАПЛЯ.png";

import { Google, Instagram, YouTube, LocalPhone } from "@mui/icons-material";

function Footer({}) {
  return (
    <div className="wrapper">
      <div className="footer">
        <img className="footer__img" src={footer_img} alt="footer_img" />
        <div className="footer__wrap">
          <ul>
            <h4>© 2022 «Мирсант»</h4>
            <div className="footer__links">
              <a href="#">
                {" "}
                <Google />
              </a>
              <a href="#">
                {" "}
                <YouTube />
              </a>
              <a href="#">
                {" "}
                <Instagram />
              </a>
            </div>
            <div className="footer__phone">
              <a href="">
                {" "}
                <LocalPhone />
              </a>{" "}
              <p>+7 (989) 210-10-00</p>
            </div>
          </ul>
          <ul>
            <h4>ИНФОРМАЦИЯ</h4>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Доставка</a>
            </li>

            <li>
              <a href="#">Персональных данные</a>
            </li>
            <li>
              <a href="#">Получение и возврат товара</a>
            </li>
            
          </ul>
          <ul>
            <h4>СЛУЖБА ПОДДЕРЖКИ</h4>
            <li>
              <a href="#">Адреса и телефоны</a>
            </li>
            <li>
              <a href="#">Карта сайта</a>
            </li>
            <li>
              <a href="#">Оплата товара</a>
            </li>
          </ul>

          <ul>
            {" "}
            <h4>ДОПОЛНИТЕЛЬНО</h4>
            <li>
              <a href="#">Производители</a>
            </li>
            <li>
              <a href="#">Партнёрская программа</a>
            </li>
            <li>
              <a href="#">Акции</a>
            </li>
          </ul>

          <ul>
            <h4>ЛИЧНЫЙ КАБИНЕТ</h4>
            <li>
              <a href="#">Личный Кабинет</a>
            </li>
            <li>
              <a href="#">История заказов</a>
            </li>
            <li>
              <a href="#">Закладки</a>
            </li>
            <li>
              <a href="#">Рассылка</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
