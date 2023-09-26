import React, { useEffect, useState } from "react";
import { GrBasket } from "react-icons/gr";
import { BiHeart } from "react-icons/bi";
import Categories from "./Categories";

import { Link } from "react-router-dom";
export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div className="header">
        <p className="made">Российское производство</p>
        <Link className="link" to={"/"}>
          <span className="logo">VINERA</span>
        </Link>

        <div className="header-icon">
          <BiHeart className="heart-icon" />
          <Link to={"basket"}>
            <GrBasket
              onClick={() => {
                setCartOpen((cartOpen = !cartOpen));
              }}
              className={`basket-icon ${cartOpen && "active"}`}
            />
          </Link>
          <p className="count-order"></p>
        </div>
      </div>
      <div className="header-line"></div>
      <Categories />
    </header>
  );
}
