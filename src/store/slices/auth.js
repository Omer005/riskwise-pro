import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false, isWalletConnected: true ,
token:localStorage.getItem('token')?localStorage.getItem('token'):null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{
    settoken(state, action) {
      // You can handle the logic for signing a message here.
      // For now, let's assume you have a property in the state like `signedMessage`.
      state.token = action.payload;
      console.log(action.payload,"token");
      return;
    },
  }
});

const { reducer,actions } = authSlice;

export const{settoken}=actions

export default reducer;
