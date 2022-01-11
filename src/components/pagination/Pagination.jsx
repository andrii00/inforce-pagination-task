import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import PaginationNumber from "../paginationNumber/PaginationNumber";
import {editCurrentPage} from "../../store/listSlice";

export default function Pagination() {
    const [pageNumbers, setPageNumbers] = useState([]);
    const [maxNumber, setMaxNumber] = useState(0);
    const dispatch = useDispatch();

    const nextPage = curPage => curPage + 1;
    const prevPage = curPage => curPage - 1;

    const {
        list: {
            usedList,
            currentPage,
            postsPerPage
        }
    } = useSelector((state) => state);


    useEffect(() => {
            const countMaxNumber = Math.ceil(usedList.length / postsPerPage);

            setMaxNumber(countMaxNumber);
            setPageNumbers(Array(countMaxNumber).fill().map((_, i) => i+1))
    }, [usedList, postsPerPage]);

    return <>
        {
            pageNumbers.length && <div className='d-flex justify-content-center'>
                <ul className='pagination '>
                    <button
                        className='btn btn-primary m-lg-1'
                        disabled={currentPage < 2}
                        onClick={() => dispatch(editCurrentPage(prevPage(currentPage)))}
                    >Назад
                    </button>

                    {
                        pageNumbers.map(number => <PaginationNumber number={number} key={number}/>)
                    }

                    <button
                        className='btn btn-primary m-lg-1'
                        disabled={currentPage === maxNumber || currentPage === 1}
                        onClick={() => dispatch(editCurrentPage(nextPage(currentPage)))}
                    >Вперед
                    </button>
                </ul>
            </div>
        }
    </>
}