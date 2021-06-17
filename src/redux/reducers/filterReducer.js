import {CHANGE_CATEGORIES_FILTER, CHANGE_POPUP_FILTER} from "../actions/actionCreators";

const initialState = {
    currentPopup: 'rating',
    currentCategory: null
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_POPUP_FILTER:
            return {...state, currentPopup: action.payload}
        case CHANGE_CATEGORIES_FILTER:
            return {...state, currentCategory: action.payload}
        default:
            return state
    }
}