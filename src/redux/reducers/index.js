import { combineReducers } from "redux";
import filtersReducer from "./filters";
import shavasReducer from "./shavas";


const rootReducer = combineReducers({
  filters: filtersReducer,
  shavas: shavasReducer,
});

export default rootReducer;