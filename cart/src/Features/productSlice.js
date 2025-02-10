import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";


export const getProducts = createAsyncThunk("products/getProducts",async ()=>{
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
})

export const productSlice = createSlice({
  name: 'products',
  initialState : {
    items: [],
    status:'idle',
  },
  extraReducers:(builder)=>{
    builder.addCase(getProducts.pending,(state)=>{
        state.status = 'loading'
    }).addCase(getProducts.fulfilled,(state,action)=>{
        state.status = 'success'
        state.items = action.payload
    }).addCase(getProducts.rejected,(state)=>{
        state.status = 'failed'
    })
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer