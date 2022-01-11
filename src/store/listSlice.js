import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const listSlice = createSlice({
    name: 'list',
    initialState: {
        postsList:[],
        usedList: [],
        currentPage: 1,
        postsPerPage: 10,
        searchValueInInput:'',

    },
    reducers: {
        addPosts(state, action) {
            state.postsList = action.payload;
            state.usedList = action.payload;
        },
        editCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        searchValue(state, action) {
            state.searchValueInInput = action.payload
        },
        updateUsedList(state,action) {
            state.usedList = action.payload
        }

    }
});

export const {addPosts, editCurrentPage, searchValue,updateUsedList } = listSlice.actions

export const GetPosts = () => async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch(addPosts(response.data))
}

export default listSlice.reducer