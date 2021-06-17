import React from "react"
import {useDispatch} from "react-redux";
import {changeCategoriesFilter} from "../../redux/actions/actionCreators";


export const Category = React.memo(({currentCategory}) => {
    const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    const dispatch = useDispatch()

    const changeIndex = (index) => {
        dispatch(changeCategoriesFilter(index))
    }
    const activeButton = (index) => currentCategory === index ? "active" : ""
    return (
        <div className="categories">
            <ul>
                <li className={activeButton(null)}
                    onClick={() => changeIndex(null)}>Все
                </li>
                {categories.map((i, index) =>
                    <li key={index} className={activeButton(index)}
                        onClick={() => changeIndex(index)}>
                        {i}
                    </li>)
                }
            </ul>
        </div>
    )
})