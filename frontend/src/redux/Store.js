import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
import wishlistReducer from './Wishslice';

export const store=configureStore(
    {
        reducer:{
            cart:Cartslice,
            wishlist: wishlistReducer,
        }
    }
)