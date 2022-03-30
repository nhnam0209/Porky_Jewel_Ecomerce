import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        product:[],
        quantity: 0,
        total: 0,
    },

    reducers:{
        addProduct:(state,action)=>{
            state.quantity +=1;
            state.product.push(action.payload._id);
            state.total += action.payload.price *action.payload.quantity;
            
        },
        removeProduct:(state,action)=>{
            state.quantity -=1;
            state.product.filter((cart)=> cart._id !== action.payload._id);
            state.total -= action.payload.price;
        }
    }, 
});

export const {addProduct, removeProduct} =cartSlice.actions
export default cartSlice.reducer;