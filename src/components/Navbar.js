import React from "react";
import { algorithm, speed } from "./data";
import FormElement from "./FormElement";
import { useDispatch } from "react-redux";
import RangeAction from "../actions/RangeAction";
import BarAction from "../actions/BarAction";
const Navbar = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const rangeChange = (e) => {
    dispatch(RangeAction(e.target.value));
    dispatch(BarAction());
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <form className="form" onSubmit={handleSubmit}>
          <FormElement arr={speed} name="speed" />
          <FormElement arr={algorithm} name="algorithm" />
          <section className="form-section range">
            <h3 className="range-heading">Create Array</h3>
            <ul className="radio-container range-item">
              <li>
                <input
                  type="range"
                  onChange={rangeChange}
                  className="slider"
                  min="0"
                  max="100"
                />
              </li>
            </ul>
          </section>
          <button type="submit" className="btn">
            Sort
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
