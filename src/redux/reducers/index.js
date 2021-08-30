import { combineReducers } from "redux";
import filters from "./filters";
import shavas from "./shavas";
import cart from "./cart";


const rootReducer = combineReducers({
  filters,
  shavas,
  cart,
});

export default rootReducer;