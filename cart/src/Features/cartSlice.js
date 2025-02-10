import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: [],   // Final cart items
    tempItem: [],  //Temporary item for update
    totalPrice:0, 
  }
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            // alert("test")
            const existingItem = state.items.find(item=>item.id === action.payload.id)
            if(existingItem){
                existingItem.quantity+=1
            }else{
                state.items.push({...action.payload,quantity:1})
            }
            state.tempItem = [...state.items]
            state.totalPrice = state.items.reduce((sum,item)=>sum+item.price*item.quantity,0)
        },
        removeFromCart(state,action){
            state.items = state.items.filter((item)=>item.id!= action.payload)
            state.tempItem = [...state.items]
        }
    }
})
export const {addToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer