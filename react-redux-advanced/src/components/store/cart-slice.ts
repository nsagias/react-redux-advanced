import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0
  }, reducers: {
    addItemtoCart() {},
    removeItemFromCart() {},

  }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;