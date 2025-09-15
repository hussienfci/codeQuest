
import { authSlice } from "../lib/features/auth_tableData/authSlice";
import { tableDataSlice } from "../lib/features/auth_tableData/tableDataSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    tableData: tableDataSlice.reducer,
    auth: authSlice.reducer 
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false , 
  })
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch ; 
export default store ; 
