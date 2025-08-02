import { combineReducers } from "redux";
import ContentReducer from "./contentReducer";
import { reducer as FormReducer } from "redux-form";

export const rootReducer = combineReducers({
    contentData: ContentReducer,
    form: FormReducer
});
