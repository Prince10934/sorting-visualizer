import React from "react";
import { algorithm, speed } from "./data";
import FormElement from "./FormElement";
import { useDispatch } from "react-redux";
import RangeAction from "../actions/RangeAction";
import BarAction from "../actions/BarAction";
import SortAction from "../actions/SortAction";
import SwapBarAction from "../actions/SwapBarAction";
import TimeoutAction from "../actions/TimeoutAction";
import store from "../store";
const Navbar = () => {
  const dispatch = useDispatch();
  const fun = (i, arr) => {
    if (i < arr.length) {
      let state = store.getState();
      if (state.TIME.isChange) {
        if (i < 1) {
          dispatch(SwapBarAction(arr[i], null));
        } else {
          dispatch(SwapBarAction(arr[i], arr[i - 1]));
        }
        setTimeout(() => fun(i + 1, arr), state.RADIO.speed);
      } else {
        dispatch(BarAction(false));
      }
      console.count("hi");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SortAction(store.getState().RADIO.algorithm));
    dispatch(TimeoutAction(true));
    let arr = store.getState().SORT.indexArray;
    if (arr.length > 0) {
      fun(0, arr);
    }
  };
  const rangeChange = (e) => {
    dispatch(RangeAction(e.target.value));
    dispatch(BarAction(true));
    dispatch(TimeoutAction(false));
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
