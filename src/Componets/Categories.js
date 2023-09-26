import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Categories() {
  const dispatch = useDispatch();
  const categoriesList = useSelector((state) => state.items.categories);
  const categoriesItems = useSelector((state) => state.items.categoriesitem);
  const addKey = (key) => {
    dispatch({ type: "CATEGORIES_ITEM", payload: key });
  };

  return (
    <div className="choese-categories">
      {categoriesList.map((el) => (
        <Link
          onClick={() => {
            addKey(el.key);
          }}
          to={el.key}
          className="link choese-categories-item"
          key={el.key}
        >
          {el.name}
        </Link>
      ))}
      <div className="header-line header-line-bottom "></div>
    </div>
  );
}

export default Categories;
