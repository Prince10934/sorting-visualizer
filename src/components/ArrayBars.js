import React from "react";
import { useSelector } from "react-redux";
const ArrayBars = () => {
  const arr = useSelector((state) => state.ARRAY.arr);
  return (
    <main className="container">
      <ul className="bars">
        {arr.map((value, index) => {
          return (
            <li
              className="bar"
              key={index}
              style={{
                height: value + "px",
              }}
            ></li>
          );
        })}
      </ul>
    </main>
  );
};

export default ArrayBars;
