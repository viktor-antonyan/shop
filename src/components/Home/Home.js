import {Category} from "../Categories/Categories";
import {PopupFilter} from "../PopupFilter/PopupFilter";
import {PizzaBlock} from "../PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPizzas} from "../../redux/actions/thunkCreator";
import {Loader} from "../Loader/Loader";
import {PizzaPagination} from "../Pagination/Pagination";

export const Home = (props) => {
    const {pizzas, isLoading} = useSelector(({pizzas}) => pizzas)
    const {currentPopup, currentCategory} = useSelector(({filter}) => filter)
    const {cartPizzas} = useSelector(({cart}) => cart)

    // const pizzasToCart = Object.keys(cartPizzas).map(key => cartPizzas[key][0])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPizzas(currentCategory, currentPopup))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentCategory, currentPopup])

    return (
        <div className="container">
            <div className="content__top">
                <Category currentCategory={currentCategory}/>
                <PopupFilter currentPopupType={currentPopup}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ?
                    Array(12).fill('').map((_, index) => <Loader key={index}/>)
                    :
                    pizzas && pizzas.map((item, index) => <PizzaBlock key={`${index}:${item.id}`} {...item}
                                                                      pizzaCount={cartPizzas[item.id] && cartPizzas[item.id].items.length}/>)
                }
            </div>
            {/*<PizzaPagination/>*/}
        </div>
    )
}