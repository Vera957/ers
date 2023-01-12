export const handleAddToLikes = (state, action) => {
    state.likes.push(action.payload)
}

export const handleDeleteFromLikes = (state, action) => {
    state.likes = state.likes.filter(e=>e.id !== action.payload.id)
}

export const handleGetLikes = (state, action) => {
    state.likes = action.payload
}

export const handleAddToBasket = (state, action) => {
    state.basket.push(action.payload)
}

export const handleDeleteFromBasket = (state, action) => {
    state.basket = state.likes.filter(e => e.id !== action.payload.id)
}

export const handleGetBasket = (state, action) => {
    state.basket = action.payload
}