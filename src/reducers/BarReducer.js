const BarReducer = (state = { arr: [] }, action) => {
  if (action.type === "ARRAY") {
    return {
      arr: action.payload,
    };
  } else {
    return state;
  }
};

export default BarReducer;
