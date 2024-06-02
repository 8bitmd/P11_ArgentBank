import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
        firstName: null,
        lastName: null,
        userName: null,
    },
    reducers: {
        loginRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.error = action.payload.error;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        },
        firstName: (state, action) => {
            state.firstName = action;
        },
        lastName: (state, action) => {
            state.lastName = action;
        },
        userName: (state, action) => {
            state.userName = action.payload.userName;
        },
    }
})

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
    firstName,
    lastName,
    userName
} = authSlice.actions;

export default authSlice.reducer
