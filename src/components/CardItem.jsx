import React from "react";

import {
  NavigateNext,
  FavoriteBorder,
  CompareArrows,
  Share,
  Remove,
  Add,
  Factory,
  ListAlt,
  ShoppingCart,
  LocalShipping,
  Circle,
} from "@mui/icons-material";

import {
  Breadcrumbs,
  Typography,
  Link,
  Button,
} from "@mui/material";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Zoom from "react-img-zoom";

import img1 from "../assets/items/Alushta/Алушта_View01.png";
import img2 from "../assets/items/Alushta/Алушта_View02.png";
import img3 from "../assets/items/Alushta/Алушта_View03.png";
import img4 from "../assets/items/Alushta/Алушта_View04.png";

import CardItemsList from "./CardItemsList";

function CardItem({
  fresh,
  img,
  fall,
  title,
  price,
  newPrice,
  productcode,
  fabric,
  model,
}) {
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
        {fresh && (
          <div className="item-mini--mod item-mini--fresh">новинка</div>
        )}
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
            showArrows={false}
          >
            <div>
              <Zoom
                img={img1}
                zoomScale={1.8}
                width={500}
                height={500}
                transitionTime={0.3}
              />
              <img src={img1} />
            </div>
            <div>
              <Zoom
                img={img2}
                zoomScale={1.8}
                width={500}
                height={500}
                transitionTime={0.3}
              />
              <img src={img2} />
            </div>
            <div>
              <Zoom
                img={img3}
                zoomScale={1.8}
                width={500}
                height={500}
                transitionTime={0.3}
              />
              <img src={img3} />
            </div>
            <div>
              <Zoom
                img={img4}
                zoomScale={1.8}
                width={500}
                height={500}
                transitionTime={0.3}
              />
              <img src={img4} />
            </div>
          </Carousel>
        </div>
        <div className="card-item__description">
          <div className="card-item__like-bar">
            <p>Код товара: {productcode}</p>
            <a href="#">
              <Share />
              Поделиться
            </a>
            <a href="#">
              <CompareArrows />
              Сравнить
            </a>
            <a href="#">
              <FavoriteBorder />В Избранное
            </a>
          </div>
          <div className="card-item__price">
            <h3>{price}₽</h3>
          </div>
          <div className="card-item__cart-btns">
            <div className="item-mini__add-cart">
              <div className="item-mini__counter">
                <Button
                  className="item-mini__counter--btn item-mini__counter--btn-minus"
                  variant="outlined"
                  startIcon={<Remove />}
                />
                <div className="item-mini__counter--counter">1</div>
                <Button
                  className="item-mini__counter--btn item-mini__counter--btn-plus"
                  variant="outlined"
                  startIcon={<Add />}
                />
              </div>
              <Button className="item-mini__add-cart--btn" variant="outlined">
                Добавить в корзину
              </Button>
            </div>
          </div>
          <div className="hl"></div>
          <div className="card-item__ship">
            <ul>
              <li>
                <Factory />
                Производитель: {fabric}
              </li>
              <li>
                <ListAlt />
                Модель: {model}
              </li>
              <li>
                <ShoppingCart /> Самовывоз из магазина
              </li>
              <li>
                <LocalShipping /> Доставка домой
              </li>
            </ul>
          </div>
          <div className="hl"></div>
          <div className="card-item__in-stock">
            <div className="card-item__in-stock-title">
              <Circle />
              <h4>В наличии</h4>
            </div>
            <ul>
              <li>
                Магазин на <a href="#">Уральской 212</a>
              </li>
              {/* <li>Магазин на <a href="#">Уральской 77</a></li> */}
              <li>
                Магазин на <a href="#">Автомобильной</a>
              </li>
              <li>
                Магазин на <a href="#">Клеверной</a>
              </li>
              <li>
                Магазин на <a href="#">Ейском Шоссе</a>
              </li>
              {/*<li>Магазин на <a href="#">Ростовском Шоссе</a></li>
              <li>Магазин на <a href="#">Новотитаровской</a></li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="hl"></div>
      <div className="card-item__feature">
        <h2>Описание</h2>
        <p>
          Особенности ванны Sense: <br></br>
          1. Премиальные технологии и материалы: литьевой акрил, вакуумная
          формовка листа в алюминиевых формах.<br></br>
          2. Внутренние ребра жесткости для эргономичной посадки. <br></br>
          3. Сохраняет тепло на 30 минут дольше. <br></br>
          Каркас и панель для ванной приобретаются отдельно.
        </p>
        <h2>Характеристики</h2>
        <table className="card-item__table">
          <tbody>
            <tr>
              <td>
                <p>Тип продукта</p>
              </td>
              <td>Ванна</td>
            </tr>
            <tr>
              <td>
                <p>Модель</p>
              </td>
              <td>Sense</td>
            </tr>
            <tr>
              <td>
                <p>Артикул производителя</p>
              </td>
              <td>W76A-170-070W-A</td>
            </tr>
            <tr>
              <td>
                <p>Вид установки</p>
              </td>
              <td>пристенная</td>
            </tr>
            <tr>
              <td>
                <p>Материал</p>
              </td>
              <td>акрил</td>
            </tr>
            <tr>
              <td>
                <p>Форма</p>
              </td>
              <td>прямоугольная</td>
            </tr>
            <tr>
              <td>
                <p>Длина, см</p>
              </td>
              <td>170</td>
            </tr>
            <tr>
              <td>
                <p>Ширина, см</p>
              </td>
              <td>70</td>
            </tr>
            <tr>
              <td>
                <p>Высота, см</p>
              </td>
              <td>43</td>
            </tr>
            <tr>
              <td>
                <p>Объем, л</p>
              </td>
              <td>187</td>
            </tr>
            <tr>
              <td>
                <p>Диаметр слива, см</p>
              </td>
              <td>5.2</td>
            </tr>
            <tr>
              <td>
                <p>Бренд</p>
              </td>
              <td>Mirsant</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CardItemsList title={"Похожие товары"} />
    </div>
  );
}

export default CardItem;
