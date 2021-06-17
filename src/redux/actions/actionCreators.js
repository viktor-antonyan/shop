export const SET_PIZZAS = 'SET_PIZZAS'
export const setPizzas = (items) => {
    return {
        type: SET_PIZZAS,
        payload: items
    }
}

export const SET_ISLOADING = 'SET_ISLOADING'
export const setIsLoading = (bool) => {
    return {
        type: SET_ISLOADING,
        payload: bool
    }
}

export const CHANGE_POPUP_FILTER = 'CHANGE_POPUP_FILTER'
export const changePopupFilter = (type) => {
    return {
        type: CHANGE_POPUP_FILTER,
        payload: type
    }
}

export const CHANGE_CATEGORIES_FILTER = 'CHANGE_CATEGORIES_FILTER'
export const changeCategoriesFilter = (index) => {
    return {
        type: CHANGE_CATEGORIES_FILTER,
        payload: index
    }
}
//not logic
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE'
export const changeCurrentPage = (index) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        payload: index
    }
}

export const ADD_PIZZAS_TO_CART = 'ADD_PIZZAS_TO_CART'
export const addPizzasToCart = (pizzaObj) => {
    return {
        type: ADD_PIZZAS_TO_CART,
        payload: pizzaObj
    }
}

export const DELETE_ALL_PIZZAS = 'DELETE_ALL_PIZZAS'
export const deleteAllPizzas = () => {
    return {
        type: DELETE_ALL_PIZZAS
    }
}

export const REMOVE_PIZZA_TO_CART = 'REMOVE_PIZZA_TO_CART'
export const removePizzaToCart = (pizzaId) => {
    return {
        type: REMOVE_PIZZA_TO_CART,
        payload: pizzaId
    }
}

export const INCREMENT_PIZZAS = 'INCREMENT_PIZZAS'
export const incrementPizzas = (pizzaId) => {
    return {
        type: INCREMENT_PIZZAS,
        payload: pizzaId
    }
}

export const DECREMENT_PIZZAS = 'DECREMENT_PIZZAS'
export const decrementPizzas = (pizzaId) => {
    return {
        type: DECREMENT_PIZZAS,
        payload: pizzaId
    }
}