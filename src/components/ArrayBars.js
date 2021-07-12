import React from "react";
import { useSelector } from "react-redux";
const ArrayBars = () => {
  const arr = useSelector((state) => state.ARRAY.arr);
  return (
    <main className="container">
      <ul className="bars">{arr}</ul>
    </main>
  );
};

export default ArrayBars;
