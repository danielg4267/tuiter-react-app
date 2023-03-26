import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-door-fill"></i> Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i> Explore
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-asterisk"></i> Labs
            </Link>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark"></i> Bookmarks
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person"></i> Profile
            </Link>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'lists'?'active':''}`}>
                <i className="bi bi-card-list"></i> Lists
            </Link>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"></i> More
            </Link>
        </div>
    );
};
export default NavigationSidebar;