import './App.css';

import Pagination from "../pagination/Pagination";
import PostsList from "../postsList/PostsList";
import Search from "../search/Search";

export default function App() {
    return (
        <div className='App'>
            <Search/>
            <PostsList/>
            <Pagination/>
        </div>
    );
}
