import {loginRequest, loginSuccess, loginFailure, logout, userName, firstName, lastName} from "./authSlice";
import store from "../store";

export const loginUser = (credentials, navigate, from) => async (dispatch) => {
    dispatch(loginRequest());

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error("Login failed");
        }

        const data = await response.json();
        const userProfile = await fetchUserProfile(data.body.token)

        dispatch(loginSuccess({token: data.body.token}));
        dispatch(userName({userName: userProfile.userName}))
        dispatch(firstName({firstName: userProfile.firstName}))
        dispatch(lastName({lastName: userProfile.lastName}))

        navigate(from, {replace: true});

    } catch (error) {
        dispatch(loginFailure({error: error.message}));
        alert("L'adresse mail ou le mot de passe sont erronés.")
    }
};

export const fetchUserProfile = async (token) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", requestOptions);
        const data = await response.json();
        return data.body;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const postUsernameChange = (newUsername) => async (dispatch) => {
    const token = store.getState().auth.token

    const requestOptions = {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {"userName": newUsername}
        )
    }

    try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", requestOptions);
        const data = await response.json();
        dispatch(userName({userName: newUsername}))
        return data.body;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const logoutUser = (navigate, from) => (dispatch) => {
    dispatch(logout());
    navigate(from, {replace: true});
};
