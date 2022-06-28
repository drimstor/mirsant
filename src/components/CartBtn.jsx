import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartBtn({}) {
  return (
    <div className="header__cart-wrap">
      <FontAwesomeIcon icon={faCartShopping} />
      <div className="header__cart-counter">0</div>
    </div>
  );
}

export default CartBtn;
