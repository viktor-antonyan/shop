import React from "react"
import {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {changePopupFilter} from "../../redux/actions/actionCreators";

export const PopupFilter = React.memo(({currentPopupType}) => {
    const popupFilterItems = [
        {name: 'популярности', type: 'rating'},
        {name: 'цене', type: 'price'},
        {name: 'по имени', type: 'name'}
    ]
    const dispatch = useDispatch()
    const createSortRef = useRef()
    const [showPopup, setShowPopup] = useState(false)
    const currentPopupName = popupFilterItems.find(obj=>obj.type === currentPopupType).name

    const clickBody = (event) => {
        if (!event.path.includes(createSortRef.current)) {
            setShowPopup(false)
        }
    }
    const changePopupItem = (type) => {
        dispatch(changePopupFilter(type))
        setShowPopup(false)
    }

    useEffect(() => {
        document.body.addEventListener("click", clickBody)
    }, [])

    const TogglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <div className="sort" ref={createSortRef}>
            <div className="sort__label">
                <svg
                    className={showPopup ? 'rotate' : ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={TogglePopup}>{currentPopupName}</span>
            </div>
            {showPopup &&
            <div className="sort__popup">
                <ul>
                    {
                        popupFilterItems.map((obj, index) =>
                            <li key={index} className={obj.type === currentPopupType ? 'active' : ''}
                                onClick={() => changePopupItem(obj.type)}>{obj.name}</li>)
                    }
                </ul>
            </div>
            }
        </div>
    )
})