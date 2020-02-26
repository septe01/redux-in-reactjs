//COnnector Reducer to Actions
import { createStore, combineReducers, applyMiddleware } from "redux";

import { logger } from "./middleware";

//Insert Reducers
import incrementR from "../_reducers/incrmentR";
import decrementR from "../_reducers/decrementR";
import multiplicationR from "../_reducers/multiplicationR";
import devisionR from "../_reducers/divisionR";

const reducers = combineReducers({
  incrementR,
  decrementR,
  multiplicationR,
  devisionR
});

const store = createStore(reducers, applyMiddleware(logger));

export default store;
