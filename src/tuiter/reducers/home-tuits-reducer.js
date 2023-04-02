import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk}
    from "../../services/tuit-thunks";


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

const initialState = {
    tuits: [],
    loading: false
}


const homeTuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },

        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },

        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }

    },

    reducers: {


    }
});
export default homeTuitsSlice.reducer;