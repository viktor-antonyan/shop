import axios from "axios";
import {setIsLoading, setPizzas} from "./actionCreators";

export const getPizzas = (currentCategory,currentPopup,currentPage,totalPagePizzaCount) => dispatch => {
    dispatch(setIsLoading(true))
    axios.get(
        `/pizzas?${currentCategory !== null ? `category=${currentCategory}` : ''}&_sort=${currentPopup}&_order=desc`
    ).then(response => {
        dispatch(setPizzas(response.data))
        dispatch(setIsLoading(false))
    })
}