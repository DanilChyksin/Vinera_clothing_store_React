import { createStore, combineReducers } from "redux";
import { reducerState } from "./state/OpenMain.js";
import { customerReducer } from "./AddItems";

const rootReducer = combineReducers({
  items: customerReducer,
  changestate: reducerState,
});

export const store = createStore(rootReducer);
