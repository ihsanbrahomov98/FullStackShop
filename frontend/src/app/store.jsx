import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import counterReducer from './features/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
