import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    likes: [],
    basket: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToLikes(state, action) {
            console.log('action.payload', action.payload)
            state.likes.push(action.payload);
        },
        addToBasket(state, action) {
            state.basket.push({
                id: action.payload,
                quantity: 1
            })
            //quantity!!!!
        },
        resetAll(state, action) {
            state.basket = []
            state.likes=[]
        },
        deleteFromLikes(state, action) {

        },
    },
});

export const { addToLikes, addToBasket, resetAll } = userSlice.actions;
export const userReducer = userSlice.reducer
