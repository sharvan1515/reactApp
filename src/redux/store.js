import { configureStore } from "@reduxjs/toolkit";

import websiteContentReducer from "./websiteContentSlice";


const store = configureStore({
    reducer: {
        websiteContent: websiteContentReducer,
    }
})

export default store;