import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "./index.css";

function Profile() {
    const profile = useSelector(state => state.profile)

    return (
        <>
            <h4 className="m-2">{profile.userName}</h4>
            <div className="card">
            <img height={256} className="w-100 card-img-top" src={`/images/${profile.bannerPicture}`}/>
            <img width={110} height={110} className="rounded-circle position-absolute wd-nudge-up" src={`/images/${profile.profilePicture}`}/>
            <div className="card-body">
                <Link to="/tuiter/edit-profile" className="mt-3 me-3 float-end">
                <button className="rounded-pill btn btn-light">Edit Profile</button>
                </Link>
                    <h4 className="mt-4 card-title">{profile.userName}</h4>
                    <h5 className="text-secondary">{profile.handle}</h5>
                    <p>{profile.bio}</p>
                <div className="text-secondary me-3 mt-2 w-75">
                        <span className="me-3 "><i className="bi bi-geo-alt-fill"></i> <b>{profile.location}</b></span>
                        <span className="me-3"><i className="bi bi-balloon"></i> <b>{profile.dateOfBirth}</b></span>
                        <span className="me-3"><i className="bi bi-calendar-event"></i> <b>{profile.dateJoined}</b></span>
                </div>
                <div className="mt-2">
                    <b>{profile.followingCount}</b> Following <b className="ms-3">{profile.followersCount}</b> Followers
                </div>

            </div>
            </div>

        </>
    );
}

export default Profile;