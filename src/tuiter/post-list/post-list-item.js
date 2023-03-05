import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const PostItem = (
    {
        post = {
            "userName": "SpaceX",
            "handle": "@SpaceX",
            "time": "2h",
            "content": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "quote-userName": "",
            "quote-handle": "",
            "quote-time": "",
            "quote-content": "",
            "comments": "12K",
            "shares": "345",
            "hearts": "22"
        }
    }
) => {
    let img = "";
    let quote = "";
    if(post.image ===""){
        img = post.image;
    }
    else{
        img = <div className="row"><img height={409} className="rounded-2" src={`/images/${post.image}`}/></div>
    }
    if(post["quote-userName"] !== ""){
        quote = (<div className="row ms-4 me-4 mb-4 mt-2 p-1 border rounded-2">
                <span className="col-11">
                    <div><b>{post["quote-userName"]}</b> <i className="bi bi-patch-check-fill text-primary"></i> {post["quote-handle"]} . {post["quote-time"]}</div>
                    <div>{post["quote-content"]}</div>
                </span>
            <span className="col-1">
                <i className="bi bi-three-dots"></i>
            </span>

        </div>);
    }

    return(
        <li className="list-group-item">
            <div className="row m-2">
                <span className="col-11">
                    <div><b>{post.userName}</b> <i className="bi bi-patch-check-fill text-primary"></i> {post.handle} . {post.time}</div>
                    <div>{post.content}</div>
                </span>
                <span className="col-1">
                <i className="bi bi-three-dots"></i>
            </span>
            </div>
            {img}
            {quote}
            <table className="text-secondary ms-3 mt-2 w-100">
                <thead>
                <tr>
                    <th><span><i className="bi bi-chat-right"></i> {post.comments}</span></th>
                    <th><span><i className="bi bi-repeat"></i> {post.shares}</span></th>
                    <th><span><i className="bi bi-heart"></i> {post.hearts}</span></th>
                    <th><span><i className="bi bi-upload"></i></span></th>
                </tr>
                </thead>
            </table>

        </li>
    );
};
export default PostItem;