import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
    "userName": "NASA",
    "profPic": "nasa.png",
    "handle": "@nasa",
};

const templateTuit = {
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 0,
}

const homeTuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        like(state, {payload}) {
            const tuit = state.find((tuit) =>
                tuit._id === payload._id)
            tuit.liked = !tuit.liked;
            if(tuit.liked){
                tuit.likes += 1;
            }
            else{
                tuit.likes -=1;
            }
        },

    createTuit(state, action) {
    state.unshift({
        _id: (new Date()).getTime(),
        ...currentUser,
        ...action.payload,
        ...templateTuit,

    })

},
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },


    }
});
export const {like, createTuit, deleteTuit} = homeTuitsSlice.actions;
export default homeTuitsSlice.reducer;