import {
    ADD_PIZZAS_TO_CART,
    DECREMENT_PIZZAS,
    DELETE_ALL_PIZZAS,
    INCREMENT_PIZZAS,
    REMOVE_PIZZA_TO_CART
} from "../actions/actionCreators";

const initialState = {
    cartPizzas: {},
    totalPrice: 0,
    totalCount: 0
}

const getSum = (arr) => arr.reduce((acc, el) => acc + el.price, 0)
const allCartPizzas = (pizzaObj) => [].concat.apply([], Object.values(pizzaObj).map(el => el.items))

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZAS_TO_CART: {
            const pizzaItems = !state.cartPizzas[action.payload.id] ? [action.payload] :
                [...state.cartPizzas[action.payload.id].items, action.payload]

            const pizzaObj = {
                ...state.cartPizzas,
                [action.payload.id]: {
                    items: pizzaItems,
                    pizzaGroupCount: getSum(pizzaItems)
                },

            }

            // const allCartPizzas = [].concat.apply([], Object.values(pizzaObj).map(el => el.items))

            return {
                ...state,
                cartPizzas: pizzaObj,
                totalCount: allCartPizzas(pizzaObj).length,
                totalPrice: getSum(allCartPizzas(pizzaObj))
            }
        }
        case DELETE_ALL_PIZZAS:
            return {
                ...state, cartPizzas: {}, totalPrice: 0, totalCount: 0
            }
        case REMOVE_PIZZA_TO_CART: {
            const newPizzas = {...state.cartPizzas}
            delete newPizzas[action.payload]
            return {
                ...state,
                cartPizzas: newPizzas,
                totalCount: state.totalCount - state.cartPizzas[action.payload].items.length,
                totalPrice: state.totalPrice - getSum(state.cartPizzas[action.payload].items)
            }
        }
        case INCREMENT_PIZZAS: {
            const newItems = [...state.cartPizzas[action.payload].items, state.cartPizzas[action.payload].items[0]]
            const newPizzas = {
                ...state.cartPizzas,
                [action.payload]: {items: newItems, pizzaGroupCount: getSum(newItems)}
            }
            return {
                ...state,
                cartPizzas: newPizzas,
                totalPrice: getSum(allCartPizzas(newPizzas)),
                totalCount: allCartPizzas(newPizzas).length
            }
        }
        case DECREMENT_PIZZAS: {
            const pizzaItems = state.cartPizzas[action.payload].items
            const newItems = pizzaItems.length > 1 ? pizzaItems.slice(1) : pizzaItems
            const newPizzas = {
                ...state.cartPizzas,
                [action.payload]: {items: newItems, pizzaGroupCount: getSum(newItems)}
            }
            return {
                ...state,
                cartPizzas: newPizzas,
                totalPrice: getSum(allCartPizzas(newPizzas)),
                totalCount: allCartPizzas(newPizzas).length
            }
        }

        default:
            return state
    }
}