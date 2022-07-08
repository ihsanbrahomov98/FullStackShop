import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      state.quantity -= 1;
      state.products.pop(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    addTooCart: (state) => {
      state.quantity += 1;
    },
    increment: (state, action) => {
      state.products.payload.quantity += 1;
    },
    decrement: (state, action) => {
      state.payload.quantity -= 1;
    },
  },
});

export const { addProduct, addTooCart, decrement, increment, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
