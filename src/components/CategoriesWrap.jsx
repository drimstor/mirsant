import React from "react";

function CategoriesWrap({ items, divClass, ulClass, children}) {
  return (
    <div className={divClass}>
      <ul className={ulClass}>
        {children}
        {items && items.map((item, index) => (
          <li key={`${item}_${index}`}>
            {" "}
            <a href="#">{item}</a>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesWrap;
