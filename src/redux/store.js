import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk" 
import { composeWithDevTools } from "redux-devtools-extension";  //middleware to debud Redux in the Browser (need Chrome Extension)
import authSlice from "./slices/auth.slice";
import messageSlice from "./slices/message.slice";
export default configureStore({
    reducer: {
        auth: authSlice.reducer,
        message: messageSlice.reducer,
    },
    middleware: [ thunk, composeWithDevTools ]
})