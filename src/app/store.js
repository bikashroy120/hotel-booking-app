import {configureStore} from "@reduxjs/toolkit";
import authReducers from "../services/auth/authSlice";
import placeReducers from "../services/place/placeSlice"

export const store = configureStore({
    reducer:{
        auth:authReducers,
        place:placeReducers,
    }
})