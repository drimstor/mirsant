import React from "react";

function CategoriesList({ items, className, title }) {
  return (
    <ul className={className}>
      <div className="categoryli">
        {" "}
        <p>{title}</p>
      </div>
      {items.map((item, index) => (
        <li key={`${item}_${index}`}>
          {" "}
          <a href="#">{item}</a>{" "}
        </li>
      ))}
    </ul>
  );
}

export default CategoriesList;
