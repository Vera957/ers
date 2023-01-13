import { createSlice } from "@reduxjs/toolkit";
/*import {
    handleAddToBasket,
    handleDeleteFromBasket,
    //handleAddToLikes,
    handleDeleteFromLikes,
    handleGetLikes,
    handleGetBasket,
} from "./handlers";*/
/*import {
    addToBasket,
    //addToLikes,
    deleteFromLikes, getLikes, deleteFromBasket, getBasket
} from "./opertions";*/


const initialState = {
    likes: [],
    basket: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToLikes(state, action) {
            state.likes.push(action.payload);
        },
        deleteFromLikes(state, action) {

        },
    },
});

export const { addToLikes } = userSlice.actions;
export const userReducer = userSlice.reducer