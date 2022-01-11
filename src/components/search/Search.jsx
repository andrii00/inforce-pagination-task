import {useDispatch, useSelector} from "react-redux";
import {searchValue, updateUsedList} from "../../store/listSlice";
import './search.css'
import {useEffect, useState} from "react";

export default function Search() {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(true)

    const {
        list: {
            postsList,
            searchValueInInput,
            usedList
        }
    } = useSelector((state) => state)

    const itemClickHandler = (e) => {
        dispatch(searchValue(e.target.textContent))
        setIsOpen(!isOpen)
    }

    const inputClickHandler = () => {
        setIsOpen(true)
    }

    useEffect(() => {
        const foundList = postsList.filter(post => {
            return post.title.toLowerCase().includes(searchValueInInput.toLowerCase())
        });

        dispatch(updateUsedList(foundList))
    }, [searchValueInInput])

    return (
        <div className='d-flex justify-content-center '>
            <form
                className="search_form w-50">
                <input
                    type="search"
                    value={searchValueInInput}
                    onChange={(event) => {
                        dispatch(searchValue(event.target.value))
                    }
                    }
                    onClick={inputClickHandler}
                    className="form-control rounded "
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                />

                <ul className='autocomplete rounded form-control'>
                    {
                        searchValueInInput && isOpen && usedList.map(value => (
                            <li key={value.id}
                                className='autocomplete_item'
                                onClick={itemClickHandler}
                            >
                                {value.title}
                            </li>
                        ))
                    }
                </ul>

            </form>
        </div>
    )
}