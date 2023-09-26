import React, { Component, useEffect, useState } from "react";
import OrdersItem from "./OrdersItem";
import PlacingOrder from "./PlacingOrder";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Orders(props) {
  const dispatch = useDispatch();
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    dispatch({ type: "ADD_ORDERS", payload: orders });
  }, [orders]);
  //  const orders = useSelector((state) => state.items.orders);
  const removeOrder = (id) => {
    setOrder(orders.filter((el) => el.id !== id));
    let basket = JSON.parse(localStorage.getItem("basket"));
    console.log(basket);
    if (!basket) {
      localStorage.setItem("basket", JSON.stringify([]));
      basket = [];
    }
    if (!Array.isArray(basket)) {
      return;
    }

    localStorage.setItem(
      "basket",
      JSON.stringify(basket.filter((el) => el !== id))
    );
  };
  useEffect(() => {
    const listId = JSON.parse(localStorage.getItem("basket"));
    if (Array.isArray(listId)) {
      fetch("data.json")
        .then((response) => response.json())
        .then((json) =>
          setOrder(json.items.filter((el) => listId.includes(el.id)))
        );
    }
  }, []);

  let [openPlacing, setOpenPlacing] = useState(false);

  const showOrder = () => {
    let summ = 0;
    orders.forEach((el) => {
      summ += Number.parseFloat(el.price);
    });
    return (
      <div className="basket-wrapper">
        <div className="basket-wrapper-left">
          {orders.map((el) => (
            <OrdersItem
              orders={orders}
              removeOrder={removeOrder}
              key={el.id}
              item={el}
            />
          ))}
        </div>
        <div className="placing-order">
          <div className="summ-order">
            <p>Итого</p>
            <p>{summ} ₽</p>
          </div>
          <div
            onClick={() => {
              setOpenPlacing((openPlacing = !openPlacing));
            }}
            className="placing-order-button"
          >
            Оформление заказа
          </div>
        </div>
      </div>
    );
  };
  const notShowOrder = () => {
    return (
      <div className="empty">
        <p>В корзине нет товаров</p>
        <Link className="link" to={"/"}>
          <div className="start-shoping-button">Начать покупки</div>
        </Link>
      </div>
    );
  };
  return (
    <div
      className={` ${
        orders.length > 0 ? "basket-orders" : "basket-not-orders"
      }`}
    >
      <h2 className="basket-title">КОРЗИНА</h2>
      <div className="items-to-basket">
        {orders.length > 0 ? showOrder() : notShowOrder()}
      </div>
      {openPlacing && (
        <div className="placing-order-wrapper">
          <PlacingOrder />
        </div>
      )}
    </div>
  );
}
