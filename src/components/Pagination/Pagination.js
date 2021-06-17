import Pagination from "react-js-pagination";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentPage} from "../../redux/actions/actionCreators";
// import 'bootstrap/dist/css/bootstrap.min.css'


export const PizzaPagination = () => {
    const dispatch = useDispatch()
    const {currentPage} = useSelector(({pizzas}) => pizzas)
    const handlePageChange = (pageNumber) => {
       dispatch(changeCurrentPage(pageNumber))
    }

    return (
        <div>
            <Pagination
                activePage={currentPage}
                // itemsCountPerPage={8}
                totalItemsCount={30}//bag
                pageRangeDisplayed={2}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>
    );
}
