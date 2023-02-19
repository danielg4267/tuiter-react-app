import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {

    var followList = "<div class=\"list-group\"><span class=\"list-group-item\"><b>Who to follow</b></span>";

    for(let i=0; i<who.length; i++){
        followList += "<span class=list-group-item>" + WhoToFollowListItem(who[i]) + "</span>";
    }

    followList += "</div>"

    return(followList);
}

export default WhoToFollowList;