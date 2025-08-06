import { configureStore } from "@reduxjs/toolkit";
// import { CartSlice } from "./Slices/CartSlice";
import CounterReducer from "./Slices/CartSlice"

export const store = configureStore({
    reducer:{
        // cart: CartSlice.reducer,
        cart: CounterReducer,
    }
});