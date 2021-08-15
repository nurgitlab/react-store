import { combineReducers } from "redux";
import filtersReducer from './filters';
import shavasReducer from "./shavas";


const rootReducer = combineReducers({
  filtersReducer,
  shavasReducer,
});

export default rootReducer;