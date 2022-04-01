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
            state.product.push(action.payload);
            state.total += action.payload.price *action.payload.quantity;
            
        },
        removeProduct:(state,action)=>{
            state.quantity = 0;
            state.product =  state.product.filter((product)=> product.id !== action.payload._id);
            state.total = 0;
        }
    }, 
});

export const {addProduct, removeProduct} =cartSlice.actions
export default cartSlice.reducer;