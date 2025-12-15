import axios from "../api/axiosConfig";
import { addUsers } from "./userSlice";

export const currentUser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user) dispatch(addUsers(user))
        else console.log('No user found')
    } catch (error) {
        console.log(error);
    }
}

export const asyncLogoutUser = () => async (dispatch, getState) => {
    try {
        localStorage.removeItem('user')
        console.log('User logged out')
    } catch (error) {
        console.log(error);
    }
}

export const asyncLoginUser = (user) => async (dispatch, getState) => {
    try {
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        console.log(data[0])
        localStorage.setItem('user', JSON.stringify(data[0]))
        dispatch(addUsers(data[0]))
    } catch (error) {
        console.log(error);
    }
}


export const asyncRegisterUser = (user) => async (dispatch, getState) => {
    try {
        // use ko api mein bhejna hai
        const response = await axios.post("/users", user);
    } catch (error) {
        console.log(error);
    }
}