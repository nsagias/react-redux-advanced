import { createSlice } from "@reduxjs/toolkit"; 


const CART_SLICE: string = "CART_SLICE";
const NEW_ITEM_QUANTITY_DEFAULT: number = 1;

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
  name: CART_SLICE,
  initialState: INITIAL_STATE_CART_ITEMS, 
  reducers: {
    addItemtoCart(state: INewItem , action: INewItemAction): void {
      const newItem = action.payload;
      const existingItems = state.items.find(item => item.id === newItem.id);
      if (!existingItems) {
        state.items.push({ 
          id: newItem.id, 
          price: newItem.price, 
          quantity: NEW_ITEM_QUANTITY_DEFAULT, 
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