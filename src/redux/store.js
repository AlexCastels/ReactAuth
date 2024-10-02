import { configureStore } from "@reduxjs/toolkit";
import userStateSlice from "./slice/userStateSlice";

export const store = configureStore({
    reducer:{
        userState: userStateSlice
    }
})