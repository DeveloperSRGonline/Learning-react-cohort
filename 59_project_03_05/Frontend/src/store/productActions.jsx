import axios from "../api/axiosConfig";
import { getAllProducts } from "./productSlice";
import { toast } from "react-toastify";
import { ENDPOINTS } from "../constants/apiConstants";

export const asyncGetAllProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(ENDPOINTS.PRODUCTS);
        dispatch(getAllProducts(data));
    } catch (error) {
        toast.error(error.message);
    }
};

export const asyncAddProduct = (product) => async (dispatch) => {
    try {
        await axios.post(ENDPOINTS.PRODUCTS, product);
        dispatch(asyncGetAllProducts());
        toast.success("Product added successfully");
    } catch (error) {
        toast.error(error.message);
    }
};

export const asyncUpdateProduct = (id, product) => async (dispatch) => {
    try {
        await axios.patch(`${ENDPOINTS.PRODUCTS}/${id}`, product);
        dispatch(asyncGetAllProducts());
        toast.success("Product updated successfully");
    } catch (error) {
        toast.error(error.message);
    }
};

export const asyncDeleteProduct = (id) => async (dispatch) => {
    try {
        await axios.delete(`${ENDPOINTS.PRODUCTS}/${id}`);
        dispatch(asyncGetAllProducts());
        toast.success("Product deleted successfully");
    } catch (error) {
        toast.error(error.message);
    }
};
