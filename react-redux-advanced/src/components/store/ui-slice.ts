import { createSlice } from "@reduxjs/toolkit"; 
import { IUISlice } from "../UI/card.models";
import { UI_SLICE, INITIAL_STATE_UI_SLICE } from "../UI/ui.constants";

const uiSlice = createSlice({
  name: UI_SLICE,
  initialState: INITIAL_STATE_UI_SLICE,
  reducers: {
    toggle(state: IUISlice):  void {
      state.cartIsVisible = !state.cartIsVisible
    }
  } 
});

export const uiAction  = uiSlice.actions;
export default uiSlice.reducer;