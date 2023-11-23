import { configureStore } from "@reduxjs/toolkit";  //getDefaultMiddleware
import authService from "./services/authService";
import authReducers from "./reducers/authReducers";

// create redux (store all state in one file)
const Store = configureStore({
    reducer: {
        [authService.reducerPath]: authService.reducer,
        "authReducer" : authReducers
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([categoryService.middleware])
});

export default Store;