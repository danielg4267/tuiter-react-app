import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuit-thunks";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TuitStats from "./tuit-stats";




const PostItem = (
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
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">
            <div className="row m-2">
                <span className="col-2"><img className="rounded-circle" height={48} width={48} src={`/images/${post.profPic}`}/></span>
                <span className="col-9">
                    <div><b>{post.userName}</b> <i className="bi bi-patch-check-fill text-primary"></i> {post.handle} . {post.time}</div>
                    <div>{post.tuit}</div>
                    {post.image !== "" ?
                        <div className="row"><img height={409} className="rounded-2" src={`/images/${post.image}`}/></div>
                        :
                        ""}
                    {(post["quote-userName"] !== "") ?
                        <div className="row ms-2 me-2 mb-4 mt-2 p-1 border rounded-2">
                        <span className="col-11">
                        <div><b>{post["quote-userName"]}</b> <i className="bi bi-patch-check-fill text-primary"></i> {post["quote-handle"]} . {post["quote-time"]}</div>
                        <div>{post["quote-content"]}</div>
                        </span>
                            <span className="col-1">
                        <i className="bi bi-three-dots"></i>
                        </span>
                        </div> : ""}
                </span>
                <span className="col-1">
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(post._id)}></i>

            </span>

            </div>
            <TuitStats post={post}/>

        </li>
    );
};
export default PostItem;