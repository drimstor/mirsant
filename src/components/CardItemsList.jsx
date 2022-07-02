import React from 'react';
import CardItemMini from './CardItemMini';

import { useNavigate } from 'react-router-dom';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';

import item_img from '../assets/items/Pond/Pond__View01.png';
import item_img2 from '../assets/items/Alushta/Алушта_View01.png';
import item_img3 from '../assets/items/Sigma/Sigma__View01.png';
import item_img4 from '../assets/items/Kappa/Массандра_V2__View05.png';

function CardItemsList({ title }) {
  const navigate = useNavigate();
  const redirect = (src) => {
    window.scrollTo(0, 0);
    return navigate(src);
  };

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items = [
    <CardItemMini
      img={item_img}
      title={'Ванна акриловая MIRSANT "Premium"'}
      price={'29100'}
      fresh
      onClick={() => {
        redirect('/item1');
      }}
    />,
    <CardItemMini
      img={item_img2}
      title={'Ванна акриловая MIRSANT "АЛУШТА"'}
      price={'16900'}
      fresh
      onClick={() => {
        redirect('/item2');
      }}
    />,
    <CardItemMini
      img={item_img3}
      title={'Ванна акриловая MIRSANT "Sigma"'}
      price={'74900'}
      onClick={() => {
        redirect('/item3');
      }}
    />,
    <CardItemMini
      img={item_img4}
      title={'Ванна акриловая MIRSANT "МАССАНДРА"'}
      price={'31600'}
      newPrice={'26700'}
      fall
      onClick={() => {
        redirect('/item4');
      }}
    />,
  ];

  // const itemsMini = [
  //   <CardItemMini
  //     img={items[0].img1}
  //     title={items[0].title}
  //     price={items[0].price}
  //     fresh
  //     onClick={() => {
  //       redirect("/item");
  //     }}
  //   />,
  //   <CardItemMini
  //     img={items[1].img1}
  //     title={items[1].title}
  //     price={items[1].price}
  //     fresh
  //     onClick={() => {
  //       redirect("/item");
  //     }}
  //   />,
  //   <CardItemMini
  //     img={items[2].img1}
  //     title={items[2].title}
  //     price={items[2].price}
  //     onClick={() => {
  //       redirect("/item");
  //     }}
  //   />,
  //   <CardItemMini
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

  return (
    <div className="wrapper">
      <div className="list-items">
        <div className="card-item__recommend">
          <h2>{title}</h2>
          <AliceCarousel
            infinite
            disableDotsControls
            className={'mini-carousel'}
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
