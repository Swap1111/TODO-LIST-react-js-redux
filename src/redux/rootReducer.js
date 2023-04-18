import {combineReducers} from "redux";
import { operationsReducer } from "./todo/reducers/operations";
export const rootReducer=combineReducers({
    operationsReducer,
})