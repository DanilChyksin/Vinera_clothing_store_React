import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Items(props) {
  const dispatch = useDispatch();

  const addFullItem = (item) => {
    dispatch({ type: "ADD_FULLITEM", payload: item });
  };

  return (
    <div className="new-items">
      <Link className="new-items link" to={"fullItem"}>
        <img
          onClick={() => {
            addFullItem(props.item);
          }}
          src={"./img/" + props.item.img}
        />
      </Link>
      <h2>{props.item.title}</h2>
      <b>{props.item.price} ₽</b>
    </div>
  );
}
export default Items;
