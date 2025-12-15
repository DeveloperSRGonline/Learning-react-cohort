import { createSlice } from "@reduxjs/toolkit";

const getInitialUser = () => {
    try {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    } catch (e) {
        return null;
    }
};

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: getInitialUser()
    },
    reducers: {
        addUsers: (state, action) => {
            // here you cannot call api
            state.users = action.payload
        },
        removeUser: (state) => {
            state.users = null
        }
    }
})

export const { addUsers, removeUser } = userSlice.actions;

export default userSlice.reducer;