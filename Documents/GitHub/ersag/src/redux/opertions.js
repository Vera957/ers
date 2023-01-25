import { createAsyncThunk } from "@reduxjs/toolkit/dist/query";
import axios from 'axios'

export const addToLikes = createAsyncThunk(
    "user/likes",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/wishlist");
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteFromLikes = createAsyncThunk(
    'user/deleteFromLikes',
    async (_, thunkAPI) => {
        try {
            const response = await axios.put('/wishlist')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
export const getLikes = createAsyncThunk(
    'user/getLikes',
    async (_, thunkAPI) => {
        try {
            const response = await axios.put('/wishlist')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
export const addToBasket = createAsyncThunk(
    'user/addToBasket',
    async (_, thunkAPI) => {
        try {
            const response = await axios.post('/basket')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
export const deleteFromBasket = createAsyncThunk(
    'user/deleteFromBasket',
    async (_, thunkAPI) => {
        try {
            const response = await axios.put('/basket')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const getBasket = createAsyncThunk(
    'user/getBasket',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/basket')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)



