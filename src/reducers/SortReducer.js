import Bubble from "../algorithms/Bubble";
import Merge from "../algorithms/Merge";
const SortReducer = (state = { indexArray: [] }, action) => {
  switch (action.type) {
    case "bubble":
      return {
        indexArray: Bubble(action.payload.height),
      };
    case "merge":
      return {
        indexArray: Merge(action.payload.height, action.payload.arr),
      };
    default:
      return state;
  }
};

export default SortReducer;
