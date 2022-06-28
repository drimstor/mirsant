import React from "react";

import CategoriesList from "./CategoriesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBath,
  faShower,
  faBrush,
  faHouseChimneyWindow,
  faTableCellsLarge,
  faSink,
  faFan,
  faFaucet,
} from "@fortawesome/free-solid-svg-icons";
import CategoriesWrap from "./CategoriesWrap";

const globalCategory = [
  "Ванны",
  "Душевые",
  "Аксессуары",
  "Мебель",
  "Керамогранит",
  "Мойки для кухни",
  "Сифоны",
  "Смесители",
];

const bathCategory = [
  "Ванны акриловые",
  "Экраны для ванны",
  "Карнизы для ванн",
];

const showerCategory = [
  "Душевые ограждения Mirsant",
  "Душевые ограждения Акватон",
];

const accessoryCategory = [
  "Аксессуары ELGHANSA",
  "Аксессуары GROSS AQUA",
  "Аксессуары LEMARK",
];

const furnitureCategory = [
  "Мебельные умывальники SANTEK",
  "Раковины накладные SHELL",
  "Мебель SOLE",
  "Зеркала Gair",
  "Мебель для ванной Francesco Conti",
  "Мебель для ванной Акватон",
  "Мебель для ванной Мирсант",
];

const tileCategory = [
  "Декоративные элементы",
  "Керамическая плитка",
  "Керамогранит",
  "Мозаика",
];

const sinkCategory = ["Акватон"];

function Categories({}) {
  return (
    <div className="categories">
      <div className="wrapper">
        <div className="categories__body">
          <ul className="categories__list">
            <li className="allProductsBtn">
              <a href="#">Все товары</a>
              <CategoriesWrap
                divClass={"categories__menu-wrap"}
                ulClass={"categories__menu-list"}
              >
                <li className="bathBtn">
                  <FontAwesomeIcon icon={faBath} />
                  <a href="#">{globalCategory[0]}</a>
                  <CategoriesList
                    title={globalCategory[0]}
                    className="categories__global-list"
                    items={bathCategory}
                  />
                </li>
                <li className="showerBtn">
                  <FontAwesomeIcon icon={faShower} />
                  <a href="#">{globalCategory[1]}</a>
                  <CategoriesList
                    title={globalCategory[1]}
                    className="categories__global-list"
                    items={showerCategory}
                  />
                </li>
                <li className="accessoryBtn">
                  <FontAwesomeIcon icon={faBrush} />
                  <a href="#">{globalCategory[2]}</a>
                  <CategoriesList
                    title={globalCategory[2]}
                    className="categories__global-list"
                    items={accessoryCategory}
                  />
                </li>
                <li className="furnitureBtn">
                  <FontAwesomeIcon icon={faHouseChimneyWindow} />
                  <a href="#">{globalCategory[3]}</a>
                  <CategoriesList
                    title={globalCategory[3]}
                    className="categories__global-list"
                    items={furnitureCategory}
                  />
                </li>
                <li className="tileBtn">
                  <FontAwesomeIcon icon={faTableCellsLarge} />
                  <a href="#">{globalCategory[4]}</a>
                  <CategoriesList
                    title={globalCategory[4]}
                    className="categories__global-list"
                    items={tileCategory}
                  />
                </li>
                <li className="sinkBtn">
                  <FontAwesomeIcon icon={faSink} />
                  <a href="#">{globalCategory[5]}</a>
                  <CategoriesList
                    title={globalCategory[5]}
                    className="categories__global-list"
                    items={sinkCategory}
                  />
                </li>
                <li>
                  <FontAwesomeIcon icon={faFan} />{" "}
                  <a href="#">{globalCategory[6]}</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faFaucet} />
                  <a href="#">{globalCategory[7]}</a>
                </li>
              </CategoriesWrap>
            </li>
            <li className="bathBtnAside">
              <a href="#">Ванны</a>
              <CategoriesWrap
                divClass={"categories__menu-wrap"}
                ulClass={"categories__menu-list"}
                items={bathCategory}
              />
            </li>
            <li className="showerBtnAside">
              <a href="#">Душевые</a>
              <CategoriesWrap
                divClass={"categories__menu-wrap"}
                ulClass={"categories__menu-list"}
                items={showerCategory}
              />
            </li>
            <li className="accessoryBtnAside">
              <a href="#">Аксессуары</a>
              <CategoriesWrap
                divClass={"categories__menu-wrap"}
                ulClass={"categories__menu-list"}
                items={accessoryCategory}
              />
            </li>
            <li className="furnitureBtnAside">
              <a href="#">Мебель</a>
              <CategoriesWrap
                divClass={"categories__menu-wrap"}
                ulClass={"categories__menu-list"}
                items={furnitureCategory}
              />
            </li>
            <li className="tileBtnAside">
              <a href="#">Керамогранит</a>
              <CategoriesWrap
                divClass={"categories__menu-wrap"}
                ulClass={"categories__menu-list"}
                items={tileCategory}
              />
            </li>
            <li className="sinkBtnAside">
              <a href="#">Мойки для кухни</a>
              <CategoriesWrap
                divClass={"categories__menu-wrap"}
                ulClass={"categories__menu-list"}
                items={sinkCategory}
              />
            </li>
            <li>
              <a href="#">Сифоны</a>
            </li>
            <li>
              <a href="#">Смесители</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
