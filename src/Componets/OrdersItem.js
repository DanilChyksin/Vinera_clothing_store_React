import React, { Component, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";

function OrdersItem(props) {
  let summ = 1;
  return (
    <div className="order">
      <div className="order-item">
        <img className="order-img" src={"./img/" + props.item.img} />
        <div className="order-desc">
          <h2>{props.item.title}</h2>
          <p>Размер:</p>
          <p>Цвет:</p>
        </div>
        <div className="add-quantity">
          <div onClick={() => summ--} className="put-item-button">
            <p>-</p>
          </div>
          <p>{summ} Шт.</p>
          <div onClick={() => summ++} className="add-item-button">
            <p>+</p>
          </div>
        </div>
        <b className="price-order">{props.item.price} ₽</b>
        <GrClose
          onClick={() => {
            props.removeOrder(props.item.id);
          }}
          className="order-close-button"
        />
        <div className="order-line"></div>
      </div>
    </div>
  );
}

export default OrdersItem;
