import {SET_ISLOADING, SET_PIZZAS} from "../actions/actionCreators";

const initialState = {
    pizzas: [],
    isLoading: true,
    // currentPage: 1,
    // totalPagePizzaCount: 8
}
export const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state, pizzas: action.payload
            }
        case SET_ISLOADING:
            return {...state, isLoading: action.payload}
        // case CHANGE_CURRENT_PAGE:
        //     return {...state, currentPage: action.payload}
        default:
            return state
    }
}