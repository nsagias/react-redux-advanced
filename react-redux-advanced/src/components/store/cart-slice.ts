import { createSlice } from "@reduxjs/toolkit"; 


const INITIAL_STATE_CART_ITEMS= {
  items: [{
    id: "id", 
    price: 0, 
    quantity: 0, 
    totalPrice: 0,
    name: ""
  }],
  totalQuantity: 0
};


interface INewItem {
  items: {
    id: string;
    price: number;
    quantity: number;
    totalPrice: number;
    name: string;
  }[];
}


interface INewItemAction {
    payload: any;
    type: string;
}


const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE_CART_ITEMS, 
  reducers: {
    addItemtoCart(state: INewItem , action: INewItemAction): void {
      const newItem = action.payload;
      const existingItems = state.items.find(item => item.id === newItem.id);
      if (!existingItems) {
        state.items.push({ 
          id: newItem.id, 
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