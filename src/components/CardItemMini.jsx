import React, { useState } from 'react';

import { FavoriteBorder, CompareArrows, Remove, Add } from '@mui/icons-material';
import Button from '@mui/material/Button';

function CardItemMini({ fresh, img, fall, title, price, newPrice, onClick }) {
  
  let [counter, setCounter] = useState(1);
  
  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }
  
  function prettify(price, counter) {
    let num = price * counter;
    let n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
  }

  return (
    <div className="list-items__item item-mini">
      {fresh && <div className="item-mini--mod item-mini--fresh">новинка</div>}
      {fall && <div className="item-mini--mod item-mini--fall">цена снижена</div>}
      <div className="item-mini__img" onClick={onClick}>
        <img src={img} alt="Item-photo" />
      </div>
      <div className="item-mini__title">
        <h3>{title}</h3>
      </div>
      <div className="item-mini__price">
        {fall ? (
          <div className="item-mini__price--wrap">
            <h2>
            {prettify(newPrice,counter)}₽<p>{prettify(price,counter)}₽</p>
            </h2>
          </div>
        ) : (
          <h2>{prettify(price,counter)}₽</h2>
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
            onClick={decrement}
          />
          <div className="item-mini__counter--counter">{counter}</div>
          <Button
            className="item-mini__counter--btn item-mini__counter--btn-plus"
            variant="outlined"
            startIcon={<Add />}
            onClick={increment}
          />
        </div>
        <Button className="item-mini__add-cart--btn" variant="outlined">
          В корзину
        </Button>
      </div>
    </div>
  );
}

export default CardItemMini;
