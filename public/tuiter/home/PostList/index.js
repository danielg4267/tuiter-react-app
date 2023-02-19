import PostItem from "./PostItem.js";
import post from "./posts.js"
const PostList = () => {

    var postList = "<div class=\"list-group\">";

    for(let i=0; i<post.length; i++){
        postList += "<span class=list-group-item>" + PostItem(post[i]) + "</span>";
    }

    postList += "</div>"

    return(postList);
}

export default PostList;