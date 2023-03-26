import { createSlice } from "@reduxjs/toolkit";
import profile from '../data/profile.json';



const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {

        saveAll(state, {payload}) {
            state.userName = payload.userName;
            state.handle = payload.handle;
            state.profilePicutre = payload.profilePicutre;
            state.bannerPicture = payload.bannerPicture;
            state.bio = payload.bio;
            state.website = payload.website;
            state.location = payload.location;
            state.dateOfBirth = payload.dateOfBirth;
        },



    }
});
export default profileSlice.reducer;
export const {saveAll} = profileSlice.actions;