import React from "react";
import "./Header.css";
export default function Nav({ children, type }) {
  return (
    <div className={`${type}`}>
      {children}

      {/* <div className="navbar-animation">
        <img src="../src/assets/nav_bar/TOP-STRIP_FASHION-WEEK.gif" alt="" />
      </div>
      <img src="../src/assets/screen_shot/shop_earn.png" alt="" />
      <div>
        <FaBeer />
      </div> */}
      {/* <p>wellcome to jumia</p> */}
    </div>
  );
}
