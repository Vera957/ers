import { createSlice } from "@reduxjs/toolkit";
import { source } from "../source";
//import { transporter } from "../nodemailer/nodemailer";

const initialState = {
    likes: [],
    basket: [],
    deal: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToLikes(state, action) {
            const notInLikestYet = state.likes.findIndex(e => e.id === action.payload) === -1
            if (!notInLikestYet) alert('Вже в бажаному')
            else {
                const item = source.find(e => e.id === action.payload)
                state.likes.push(item)
                alert('Додано!')
            }
        },
        addToBasket(state, action) {
            console.log('action.payload addToBasket', action.payload)
            const notInBasketYet = state.basket.findIndex(e => e.id === action.payload) === -1
            if (!notInBasketYet) alert('Вже в корзині')
            else {
                const item = source.find(e => e.id === action.payload)
                if (item.quantity === '') item.quantity = '1'
                state.basket.push(item)
                alert('Додано!')
            }
        },
        deleteFromBasket(state, action) {
            const index = state.basket.findIndex(e => e.id === action.payload)
            state.basket.splice(index, 1)
        },
        setQuantity(state, action) {
            if (action.payload[1] <= 0) alert('Або виберіть валідну кількісь, або видаліть товар')
            else {
                const index = state.basket.findIndex(e => e.id === action.payload[0])
                state.basket[index].quantity = action.payload[1]
            }
        },
        setUserData(state, action) {
            state.deal.push([action.payload, state.basket])
            state.basket = []
        },
        resetAll(state, action) {
            state.basket = []
            state.likes = []
            state.deal=[]
        },
        deleteFromLikes(state, action) {
            const index = state.likes.findIndex(e => e.id === action.payload)
            state.likes.splice(index, 1)
        },
    },
});

export const { addToLikes, addToBasket, resetAll, setQuantity, deleteFromBasket, setUserData, deleteFromLikes } = userSlice.actions;
export const userReducer = userSlice.reducer
