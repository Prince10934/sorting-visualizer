const RadioReducer = (state = { algorithm: "bubble", speed: 0 }, action) => {
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
      return { ...state, speed: 0 };
    case "average":
      return { ...state, speed: 150 };
    case "slow":
      return { ...state, speed: 300 };
    default:
      return state;
  }
};
export default RadioReducer;
