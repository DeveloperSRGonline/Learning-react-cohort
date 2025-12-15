import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: []
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addNewProduct: (state, action) => {
            state.products.push(action.payload);
        },
        getAllProducts: (state, action) => {
            state.products = action.payload;
        }
    }
})

export const { addNewProduct, getAllProducts } = productSlice.actions;

export default productSlice.reducer;