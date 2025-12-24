import axios from "../api/axiosConfig";
import { addUsers, removeUser } from "./userSlice";
import { ENDPOINTS } from "../constants/apiConstants";

export const currentUser = () => async (dispatch) => {
    try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            dispatch(addUsers(JSON.parse(storedUser)));
        }
    } catch (error) {
        console.error("Error fetching current user:", error);
    }
};

export const asyncLogoutUser = () => async (dispatch) => {
    try {
        localStorage.removeItem('user');
        dispatch(removeUser());
    } catch (error) {
        console.error("Error during logout:", error);
    }
};

export const asyncLoginUser = (credentials) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${ENDPOINTS.USERS}?email=${credentials.email}&password=${credentials.password}`);
        if (data.length > 0) {
            const user = data[0];
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(addUsers(user));
            return user;
        } else {
            throw new Error("Invalid credentials");
        }
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

export const asyncRegisterUser = (user) => async (dispatch) => {
    try {
        const { data } = await axios.post(ENDPOINTS.USERS, user);
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(addUsers(data));
        return data;
    } catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
};

export const asyncUpdateUser = (user) => async (dispatch) => {
    try {
        const { data } = await axios.put(`${ENDPOINTS.USERS}/${user.id}`, user);
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(addUsers(data));
        return data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};