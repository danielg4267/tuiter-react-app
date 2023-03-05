import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js";

const PostSummaryList = () => {

    var postList = "<div class=\"list-group\">";

    for(let i=0; i<post.length; i++){
        postList += "<span class=list-group-item>" + PostSummaryItem(post[i]) + "</span>";
    }

    postList += "</div>"

    return(postList);
}

export default PostSummaryList;