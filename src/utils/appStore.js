import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

const appStore = configureStore({
  // this reducer modifies our app store and it keeps the collection of all slices reducers
    reducer:{
        cart:cartReducer,
    }
});
export default appStore;

