import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Features/productSlice'
import cartReducer from '../Features/cartSlice'
export const store = configureStore({
  reducer: {
    productsData :productReducer,
    cart: cartReducer
  },
})
