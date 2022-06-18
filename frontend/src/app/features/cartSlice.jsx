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
    addTooCart: (state) => {
      state.quantity += 1;
    },
  },
});

export const { addProduct, addTooCart } = cartSlice.actions;

export default cartSlice.reducer;
