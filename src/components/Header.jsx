import React from "react";
import logo from "../assets/img/LOGO_4.png";
import logoBlack from "../assets/img/LOGO_5.png";

import { CartBtn } from "./";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightArrowLeft,
  faMagnifyingGlass,
  faTruck,
  faCircleInfo,
  faShop,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="wrapper">
      <div className="sup-header">
        <ul className="sup-header__left">
          <li>
            <FontAwesomeIcon icon={faShop} />
            <a href="#">Магазины</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleInfo} /> <a href="#">О Компании</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faTruck} />
            <a href="#">Доставка</a>
          </li>
        </ul>

        <ul className="sup-header__right">
          <li>
            <FontAwesomeIcon icon={faHeart} />
            <a href="#">Избранное</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowRightArrowLeft} />
            <a href="#">Сравнение</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} /> <a href="#">Личный кабинет</a>
          </li>
        </ul>
      </div>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <img height={40} src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__search">
          <div className="seacrh-form">
            <form className="seacrh-form__form" method="get">
              <div className="search-form__wrap">
                <button className="seacrh-submit" type="submit">
                  <FontAwesomeIcon
                    className="svg-search"
                    icon={faMagnifyingGlass}
                  />{" "}
                </button>
                <input
                  className="seacrh-form__input"
                  type="search"
                  placeholder="Что вы ищете?"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="header__info">
          <FontAwesomeIcon icon={faPhone} />
          <div className="phone">
            <a href="tel:+79892101000">+7 (989) 210-10-00</a>
          </div>
        </div>
        <div className="header__cart">
          <CartBtn />
        </div>
      </div>
    </div>
  );
}

export default Header;
