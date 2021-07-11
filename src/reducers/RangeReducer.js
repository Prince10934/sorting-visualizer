const RangeReducer = (state = { length: 10 }, action) => {
  if (action.type === "ADD") {
    return {
      length: action.payload,
    };
  } else {
    return state;
  }
};

export default RangeReducer;
