import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {saveAll} from "../reducers/profile-reducer";
import {Link} from "react-router-dom";
import "./index.css";


function EditProfile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.profile);
    const [newProfile, setNewProfile] = useState(profile);


    const saveHandler = () => {
        const finalProfile = {
            "userName": newProfile.userName,
            "handle": newProfile.handle,
            "profilePicture": newProfile.profilePicture,
            "bannerPicture": newProfile.bannerPicture,
            "bio": newProfile.bio,
            "website": newProfile.website,
            "location": newProfile.location,
            "dateOfBirth": newProfile.dateOfBirth,
            "dateJoined": newProfile.dateJoined,
        }
        dispatch(saveAll(finalProfile));
    }

    return (
        <>
            <Link to="/tuiter/profile">
            <i className="bi bi-x-lg float-start mt-2 ms-3 me-4"></i>
            </Link>
            <h4 className="m-2">Edit Profile</h4>
            <div className="card">
                <img height={256} className="w-100 card-img-top" src={`/images/${profile.bannerPicture}`}/>
                <img width={110} height={110} className="rounded-circle position-absolute wd-nudge-up-more" src={`/images/${profile.profilePicture}`}/>


                <div className="card-body">
                    <Link to="/tuiter/profile">
                        <button onClick={saveHandler} className="float-end col-2 rounded-pill btn btn-light">Save</button>
                    </Link>

                    <div className="row m-2">
                        <label htmlFor="userName" className="text-secondary">Username</label>
                        <input type="textarea"  id="userName" className="w-50 form-control" value={newProfile.userName}
                           onChange={(event) => setNewProfile({...newProfile, userName: event.target.value})}/>
                    </div>

                    <div className="row m-2">
                        <label htmlFor="bio" className="text-secondary">Bio</label>
                        <input type="textarea"  id="bio" className="w-100 form-control" value={newProfile.bio}
                           onChange={(event) => setNewProfile({...newProfile, bio: event.target.value})}/>
                    </div>
                    <div className="row m-2">
                        <label htmlFor="location" className="text-secondary">Location</label>
                        <input type="textarea"  id="location" className="w-50 form-control" value={newProfile.location}
                           onChange={(event) => setNewProfile({...newProfile, location: event.target.value})}/>
                    </div>
                    <div className="row m-2">
                        <label htmlFor="dateOfBirth" className="text-secondary">Birthday</label>
                        <input type="date"  id="dateOfBirth" className="w-25 form-control" value={newProfile.dateOfBirth}
                           onChange={(event) => setNewProfile({...newProfile, dateOfBirth: event.target.value})}/>
                    </div>



                </div>
            </div>

        </>
    );
}

export default EditProfile;