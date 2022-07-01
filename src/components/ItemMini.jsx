import React from "react";

import {
  FavoriteBorder,
  CompareArrows,
  Remove,
  Add,
} from "@mui/icons-material";
import Button from "@mui/material/Button";

function ItemMini({ fresh, img, fall, title, price, newPrice, onClick  }) {
  return (
    <div className="list-items__item item-mini">
      {fresh && <div className="item-mini--mod item-mini--fresh">новинка</div>}
      {fall && (
        <div className="item-mini--mod item-mini--fall">цена снижена</div>
      )}
      <div className="item-mini__img"  onClick={onClick}>
        <img src={img} alt="Item-photo" />
      </div>
      <div className="item-mini__title">
        <h3>{title}</h3>
      </div>
      <div className="item-mini__price">
        {fall ? (
          <div className="item-mini__price--wrap">
            <h2>
              {newPrice}₽<p>{price}₽</p>
            </h2>
          </div>
        ) : (
          <h2>{price}₽</h2>
        )}

        <div className="item-mini__like-btn">
          <a href="#">
            <CompareArrows />
          </a>
          <a href="#">
            <FavoriteBorder />
          </a>
        </div>
      </div>
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
          В корзину
        </Button>
      </div>
    </div>
  );
}

export default ItemMini;
