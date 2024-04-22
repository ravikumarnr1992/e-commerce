import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    loggedInUser: []
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        authenticatedUser: (state, action) => {
            state.isLoggedIn = action.payload
        },
        getUserDetails: (state, action) => {
            state.loggedInUser = action.payload
        }
    }
})

export const { authenticatedUser, getUserDetails } = loginSlice.actions

export default loginSlice.reducer