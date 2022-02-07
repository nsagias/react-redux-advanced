import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0
  }, reducers: {
    addItemtoCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find(item => item.id === newItem.id);
      if (!existingItems) {
        state.items.push({ 
          itemId: newItem.id, 
          price: newItem.price, 
          quantity: 1, 
          totalPrice: newItem.price,
          name: newItem.title
        });
      }
      if (existingItems) {
        existingItems.quantity++;
        existingItems.totalPrice = existingItems.totalPrice + newItem.price;
      }
    },
    removeItemFromCart() {},

  }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;