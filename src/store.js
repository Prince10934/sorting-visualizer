import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import RadioReducer from "./reducers/RadioReducer";
import RangeReducer from "./reducers/RangeReducer";
import BarReducer from "./reducers/BarReducer";
import SortReducer from "./reducers/SortReducer";
import TimeoutReducer from "./reducers/TimeoutReducer";
const reducer = combineReducers({
  RADIO: RadioReducer,
  RANGE: RangeReducer,
  ARRAY: BarReducer,
  SORT: SortReducer,
  TIME: TimeoutReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
