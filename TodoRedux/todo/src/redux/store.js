import {legacy_createStore,compose} from "redux"
import { todoReducer } from "./reducer";

const conposeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(todoReducer,conposeEnhancer())