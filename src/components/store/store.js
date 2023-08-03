import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import firestoreSlice from "./firestoreSlice";
import dataSlice from '../../components/store/data';

const store = configureStore({
    reducer:{
        cart: cartSlice,
        products: productSlice,
        firestore: firestoreSlice,
        data: dataSlice

    }
});

export default store;