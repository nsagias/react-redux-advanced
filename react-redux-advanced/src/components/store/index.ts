import { configureStore, PayloadAction} from "@reduxjs/toolkit";
import uiSliceReducer from "./ui-slice";


const store = configureStore({
  reducer: {
      uiSlice: uiSliceReducer
    }
  });

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;