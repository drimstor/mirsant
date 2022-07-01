import React from "react";

import ScrollButton from "react-scroll-button";

function ScrollToTop() {
  return (
    <div className="scrolltotop">
      <ScrollButton
        className="scrolltotop"
        behavior="smooth"
        iconType="arrowUp"
        style={{ fontSize: "24px" }}
        targetId="top"
      />
    </div>
  );
}

export default ScrollToTop;
