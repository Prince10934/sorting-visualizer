const TimeoutReducer = (state = { isChange: false }, action) => {
  if (action.type) {
    return {
      isChange: action.payload,
    };
  } else {
    return {
      isChange: false,
    };
  }
};

export default TimeoutReducer;
