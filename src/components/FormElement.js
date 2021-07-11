import React from "react";
import { useDispatch } from "react-redux";
import RadioAction from "../actions/RadioAction";
const FormElement = ({ name, arr }) => {
  const dispatch = useDispatch();
  const changeValue = (value) => {
    dispatch(RadioAction(value));
  };
  return (
    <section className={`form-section ${name}`}>
      <h3 className={`${name}-heading`}>Choose {name}</h3>
      <ul className={`radio-container ${name}-item`}>
        {arr.map((item) => {
          return (
            <li key={item}>
              <input
                className="radio"
                id={item}
                type="radio"
                name={name}
                value={item}
                onChange={() => changeValue(item)}
              />
              <label className="label" htmlFor={item}>
                {item}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FormElement;
