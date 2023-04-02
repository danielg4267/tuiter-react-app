import React, {useEffect} from "react";
import PostListItem
    from "./post-list-item";
import {findTuitsThunk}
    from "../../services/tuit-thunks";

import {useDispatch, useSelector} from "react-redux";

const PostList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])


    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map(post =>
                    <PostListItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostList;