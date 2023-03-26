import React from "react";
import {useDispatch} from "react-redux";
import {like} from "../reducers/home-tuits-reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const TuitStats = (
    {
        post = {
            "_id": "000",
            "userName": "SpaceX",
            "profPic": "spacex.png",
            "handle": "@SpaceX",
            "time": "2h",
            "tuit": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon.",
            "image": "akiko.jpg",
            "quote-userName": "",
            "quote-handle": "",
            "quote-time": "",
            "quote-content": "",
            "liked": true,
            "replies": 890,
            "retuits": 456,
            "likes": 123}
    }
) => {

    const dispatch = useDispatch();
    const toggleLike = (post) => {dispatch(like(post))}

    return(
        <table className="text-secondary float-end me-3 mt-2 w-75">
            <thead>
            <tr>
                <th><span><i className="bi bi-chat-right"></i> {post.replies}</span></th>
                <th><span><i className="bi bi-repeat"></i> {post.retuits}</span></th>
                <th>
                    <span onClick={() => toggleLike(post)}><i className={post.liked ? "bi bi-heart-fill text-danger" : "bi bi-heart"}></i> {post.likes}</span>
                </th>
                <th><span><i className="bi bi-upload"></i></span></th>
            </tr>
            </thead>
        </table>
    )


}

export default TuitStats;