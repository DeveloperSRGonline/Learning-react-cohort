import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cartItems = action.payload || [];
        },
        addToCartLocal: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(i => i.productId === item.productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
        },
        removeFromCartLocal: (state, action) => {
            state.cartItems = state.cartItems.filter(i => i.productId !== action.payload);
        },
        updateQuantityLocal: (state, action) => {
            const { productId, quantity } = action.payload;
            const item = state.cartItems.find(i => i.productId === productId);
            if (item) {
                item.quantity = quantity;
            }
        }
    }
})

export const { setCart, addToCartLocal, removeFromCartLocal, updateQuantityLocal } = cartSlice.actions;

export default cartSlice.reducer;
