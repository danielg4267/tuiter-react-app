import React from "react";
import ExploreComponent from "../explore";
import NavigationSidebar from "../navigation-sidebar";
import WhoToFollowList from "../who-to-follow-list";
import PostList from "../post-list";
import WhatsHappening from "./whats-happening";

function Home() {
    return (
        <>
                <h4>Home</h4>
                <WhatsHappening/>
                <PostList/>
        </>
    );
}

export default Home;