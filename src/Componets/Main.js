import React, { useEffect, useMemo } from "react";
import New from "./New.js";
import Hits from "./Hits.js";
import { useSelector } from "react-redux";
function Main() {
  const data = useSelector((state) => state.items.items);
  const newItem = useMemo(() => data.filter((el) => el.new === 1));
  const hitsItem = useMemo(() => data.filter((el) => el.hits === 1));
  return (
    <main>
      <h2 className="main-new">НОВИНКИ</h2>
      {newItem.map((el) => (
        <New key={el.id} item={el} />
      ))}
      <h2 className="main-hit">ХИТЫ ПРОДАЖ</h2>
      {hitsItem.map((el) => (
        <Hits key={el.id} item={el} />
      ))}
    </main>
  );
}

export default Main;
