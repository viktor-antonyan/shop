import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {pizzasReducer} from "../reducers/pizzasReducer";
import {filterReducer} from "../reducers/filterReducer";
import thunk from 'redux-thunk'
import {cartReducer} from "../reducers/cartReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    pizzas: pizzasReducer,
    filter: filterReducer,
    cart: cartReducer
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))