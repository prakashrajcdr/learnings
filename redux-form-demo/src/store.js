import { createStore } from "redux";
import { rootReducer } from "./Reducers/combineReucers";

export const store = createStore(rootReducer);
