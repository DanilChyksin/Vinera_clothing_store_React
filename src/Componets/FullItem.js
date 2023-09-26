import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function FullItem(props) {
  const item = useSelector((state) => state.items.fullItem);

  const setLocal = (id) => {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      localStorage.setItem("basket", JSON.stringify([]));
      basket = [];
    }
    if (!Array.isArray(basket)) {
      return;
    }
    basket.push(id);
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  const data = [
    {
      id: "red",
      desc: "Красный",
      type: "color",
      hex: "#ff2d00",
    },
    {
      id: "blue",
      desc: "синий",
      type: "color",
      hex: "#003bff",
    },
    {
      id: "black",
      desc: "чёрный",
      type: "color",
      hex: "#000",
    },
    {
      id: "s",
      desc: "s",
      type: "simple",
    },
    {
      id: "l",
      desc: "l",
      type: "simple",
    },
    {
      id: "xs",
      desc: "xs",
      type: "simple",
    },
    {
      id: "xxl",
      desc: "xxl",
      type: "simple",
    },
  ];

  let [config, setconfig] = useState({});

  const setConfigOption = (key, value) => {
    setconfig({ ...config, [key]: value });
  };

  //click in small img
  let [clickImg, isClickImg] = useState(true);
  console.log(config);
  return (
    <div className="full-item-open">
      <div className="full-item-main">
        <div className="full-item-small-img">
          <div
            onClick={() => isClickImg((clickImg = !clickImg))}
            className={`${clickImg && "small-img-border"}`}
          >
            <img
              className="small-img active active-small-img"
              src={"./img/" + item.img}
            />
          </div>
          <div>
            <img className="small-img" src={"./img/" + item.img} />
          </div>
          <div>
            <img className="small-img" src={"./img/" + item.img} />
          </div>
          <div>
            <img className="small-img" src={"./img/" + item.img} />
          </div>
          <div>
            <img className="small-img" src={"./img/" + item.img} />
          </div>
        </div>
        <Link to={"/"} className="link">
          <div className="full-item-img">
            <img src={"./img/" + item.img} />
          </div>
        </Link>
        <div className="full-item-desc">
          <h2>{item.title}</h2>
          <b>{item.price} ₽</b>
          <div className="choice-color">
            <p>Цвет:</p>
            <div className="choice-color-circle">
              {data.map((el, index) => {
                if (el.type !== "color") {
                  return null;
                }

                return (
                  <div
                    onClick={() => {
                      setConfigOption(el.type, el.id);
                    }}
                    key={index}
                    style={{ background: el.hex }}
                    className={`circle-color  ${
                      el.id === config[el.type] && "active-color"
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
          <p className="size-text">Размер:</p>
          <div className="full-item-size">
            {data.map((el, index) => {
              if (el.type !== "simple") return null;
              return (
                <div
                  key={index}
                  onClick={() => {
                    setConfigOption(el.type, el.id);
                    console.log(config);
                  }}
                  className={`xs ${el.id === config[el.type] && "active"}`}
                >
                  xs
                </div>
              );
            })}
          </div>
          <div
            onClick={() => {
              setLocal(item.id);
            }}
            className="add-basket"
          >
            ДОБАВИТЬ В КОРЗИНУ
          </div>
        </div>
      </div>
    </div>
  );
}
