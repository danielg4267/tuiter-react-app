import React from "react";
import PostListItem
    from "./post-list-item";
import {useSelector} from "react-redux";

const PostList = () => {
    const postsArray = useSelector(state => state.homeTuits);

    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostListItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostList;