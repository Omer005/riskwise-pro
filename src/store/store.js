import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import walletReducer from "./slices/wallet";

const reducer = {
  auth: authReducer,
  wallet: walletReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
