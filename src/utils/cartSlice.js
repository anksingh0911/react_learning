import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
      name:'cart',
      initialState:{
        items:[]
      },
      reducers:{
        addItems:(state, action)=>{
          // In vanilla redux(older redux) says Don't mutate the state. returning was mandatory.
          // const newState = [...state]
          // newState.items.push(action.payload)
          // return newState

          // mutating our state here
          // We have to mutate the state.
          // Redux toolkit use immer.js behind the seen.
          state.items.push(action.payload)
        },
        removeItem:(state)=>{
          state?.items.pop()
        },
        clearCart:(state)=>{
         state?.items.length = 0;
        }
      }
});

export const {addItems, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
