const BarReducer = (state = { arr: [], height: [] }, action) => {
  if (action.type === "ARRAY") {
    return {
      arr: action.payload.arr,
      height: action.payload.height,
    };
  } else {
    return state;
  }
};

export default BarReducer;
