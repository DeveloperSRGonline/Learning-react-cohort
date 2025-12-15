import axios from "../api/axiosConfig";
import { getAllProducts } from "./productSlice";
import { toast } from "react-toastify";

// to get all products
export const asyncGetAllProducts = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get('/products')
        dispatch(getAllProducts(data))
    } catch (error) {
        toast.error(error.message)
    }
}

// to add a product
export const asyncAddProduct = (product) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post('/products', product)
        dispatch(asyncGetAllProducts())
    } catch (error) {
        toast.error(error.message)
    }
}

// to update a product
export const asyncUpdateProduct = (id,product) => async (dispatch, getState) => {
    try {
        await axios.patch(`/products/${id}`, product)
        dispatch(asyncGetAllProducts())
    } catch (error) {
        toast.error(error.message)
    }
}

// to delete a product
export const asyncDeleteProduct = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`/products/${id}`)
        dispatch(asyncGetAllProducts())
    } catch (error) {
        toast.error(error.message)
    }
}

