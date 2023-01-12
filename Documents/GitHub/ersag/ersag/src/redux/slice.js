import { createSlice } from "@reduxjs/toolkit";
import {
    handleAddToBasket,
    handleDeleteFromBasket,
    handleAddToLikes,
    handleDeleteFromLikes,
    handleGetLikes,
    handleGetBasket,
} from "./handlers";
import { addToBasket, addToLikes, deleteFromLikes, getLikes, deleteFromBasket, getBasket } from "./opertions";


const initialState = {
    //date: null,
    likes: [],
    basket: [],
    auth: false,
    //isLoading: false,
    //error: null,
};

export const authReducer = createSlice({
    name: 'user',
    initialState,
    /*reducers: {
        resetDailyDiary: handleResetDailyDiary,
    },*/
    extraReducers: builder => {
        builder
            .addCase(addToLikes.fulfilled, handleAddToLikes)
            .addCase(deleteFromLikes.fulfilled, handleDeleteFromLikes)
            .addCase(getLikes.fulfilled, handleGetLikes)
            .addCase(addToBasket.fulfilled, handleAddToBasket)
            .addCase(deleteFromBasket.fulfilled, handleDeleteFromBasket)
            .addCase(getBasket.fulfilled, handleGetBasket)
            //.addMatcher(action => action.type.endsWith('/pending'), handlePending)
           // .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
           // .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
    },
});