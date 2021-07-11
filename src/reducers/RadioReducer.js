const RadioReducer = (state = { algorithm: null, speed: null }, action) => {
  switch (action.type) {
    case "bubble sort":
      return { ...state, algorithm: "bubble" };
    case "merge sort":
      return { ...state, algorithm: "merge" };
    case "quick sort":
      return { ...state, algorithm: "quick" };
    case "heap sort":
      return { ...state, algorithm: "heap" };
    case "fast":
      return { ...state, speed: "fast" };
    case "average":
      return { ...state, speed: "average" };
    case "slow":
      return { ...state, speed: "slow" };
    default:
      return state;
  }
};
export default RadioReducer;
