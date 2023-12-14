import { combineReducers } from "redux";
import { operationsReducer } from "../todoApp/operations";


export const rootReducer = combineReducers({
    operationsReducer,
    // more reducers can be added here
})