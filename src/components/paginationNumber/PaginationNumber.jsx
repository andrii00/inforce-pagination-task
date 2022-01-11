import {useDispatch} from "react-redux";

import {editCurrentPage} from "../../store/listSlice";

export default function PaginationNumber({number}) {
    const dispatch = useDispatch()

    return (
        <div>
            <li className='page-item m-lg-1' key={number}>
                <button
                    className="page-link "
                    onClick={() => dispatch(editCurrentPage(number))}
                >
                    {number}
                </button>
            </li>
        </div>
    )
}