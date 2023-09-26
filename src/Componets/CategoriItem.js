import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CategoriItem() {
  const [data, setData] = useState([]);
  const { category } = useParams();
  const dispatch = useDispatch();
  const categoriesList = useSelector((state) => state.items.categories);
  const categoriesListFilter = categoriesList.filter(
    (el) => el.key === category
  );

  const openFullItem = () => {
    dispatch({ type: "OPEN_ITEM" });
  };
  const addFullItem = (item) => {
    dispatch({ type: "ADD_FULLITEM", payload: item });
  };
  useEffect(() => {
    if (category === "all") setData();
    if (typeof category === "string") {
      fetch("data.json")
        .then((response) => response.json())
        .then((json) =>
          setData(json.items.filter((el) => el.category === category))
        );
    }
  }, [category]);
  return (
    <div className="items-category-wrapper">
      <p className="name-category">{categoriesListFilter[0].name}</p>
      <div className="items-category">
        {data.map((el) => (
          <div key={el.id} className="category-item">
            <Link className="link category-item" to={"/fullItem"}>
              <img
                onClick={() => {
                  addFullItem(el);
                  openFullItem();
                }}
                src={"./img/" + el.img}
              />
            </Link>

            <h2>{el.title}</h2>
            <b>{el.price} ₽</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriItem;
