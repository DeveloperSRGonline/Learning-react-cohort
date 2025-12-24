import axios from "../api/axiosConfig";
import { setCart } from "./cartSlice";
import { addUsers } from "./userSlice";
import { ENDPOINTS, UI_STRINGS } from "../constants/apiConstants";

// Initialize cart from user data (useful during login or app refresh)
export const syncCartWithUser = () => (dispatch, getState) => {
    const user = getState().usersReducer.users;
    if (user && user.cart) {
        dispatch(setCart(user.cart));
    }
};

export const asyncAddToCart = (productId) => async (dispatch, getState) => {
    try {
        const user = getState().usersReducer.users;
        if (!user) {
            console.log(UI_STRINGS.ERROR_LOGIN_REQUIRED);
            return;
        }

        let updatedCart = [...(user.cart || [])];
        const existingItemIndex = updatedCart.findIndex(item => item.productId === productId);

        if (existingItemIndex > -1) {
            updatedCart[existingItemIndex] = {
                ...updatedCart[existingItemIndex],
                quantity: updatedCart[existingItemIndex].quantity + 1
            };
        } else {
            updatedCart.push({ productId, quantity: 1 });
        }

        const { data } = await axios.patch(`${ENDPOINTS.USERS}/${user.id}`, { cart: updatedCart });

        // Update local storage and user state
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(addUsers(data));
        dispatch(setCart(data.cart));
    } catch (error) {
        console.log("Error adding to cart:", error);
    }
};

export const asyncUpdateCartQuantity = (productId, newQuantity) => async (dispatch, getState) => {
    try {
        const user = getState().usersReducer.users;
        if (!user) return;

        if (newQuantity < 1) return;

        const updatedCart = user.cart.map(item =>
            item.productId === productId ? { ...item, quantity: newQuantity } : item
        );

        const { data } = await axios.patch(`${ENDPOINTS.USERS}/${user.id}`, { cart: updatedCart });

        localStorage.setItem('user', JSON.stringify(data));
        dispatch(addUsers(data));
        dispatch(setCart(data.cart));
    } catch (error) {
        console.log("Error updating quantity:", error);
    }
};

export const asyncRemoveFromCart = (productId) => async (dispatch, getState) => {
    try {
        const user = getState().usersReducer.users;
        if (!user) return;

        const updatedCart = user.cart.filter(item => item.productId !== productId);

        const { data } = await axios.patch(`${ENDPOINTS.USERS}/${user.id}`, { cart: updatedCart });

        localStorage.setItem('user', JSON.stringify(data));
        dispatch(addUsers(data));
        dispatch(setCart(data.cart));
    } catch (error) {
        console.log("Error removing from cart:", error);
    }
};
