import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {GetPosts} from "../../store/listSlice";
import PostItem from '../postItem/PostItem'

export default function PostsList() {
    const dispatch = useDispatch();
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);

    const {
        list: {
            usedList,
            currentPage,
            postsPerPage,
            searchValueInInput
        }
    } = useSelector((state) => state)

    const lastListIndex = currentPage * postsPerPage
    const firstListIndex = lastListIndex - postsPerPage

    useEffect(() => {
       const foundList = usedList.filter(post => {
            return post.title.toLowerCase().includes(searchValueInInput.toLowerCase())
        })

        setFilteredPosts(foundList)
    }, [usedList, lastListIndex, searchValueInInput])

    useEffect(() => {
        const currentItems = filteredPosts.slice(firstListIndex, lastListIndex)

        setCurrentItems(currentItems)
    } , [filteredPosts])

    useEffect(() => {
        dispatch(GetPosts())
    }, [])


    return (
        <div className='mt-4'>
            {
                currentItems && currentItems.map(value => <PostItem key={value.id} post={value}/>)
            }
        </div>
    )
}
