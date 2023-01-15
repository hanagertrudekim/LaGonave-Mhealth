import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import { RootState } from "..";

export interface AuthState {
  user_id: string | null;
  token: string | null;
}

const initialState: AuthState = {
  user_id: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ user_id: string; token: string }>,
    ) => {
      const cookies = new Cookies()
      cookies.set(
        "token",
        JSON.stringify({
          name: action.payload.user_id,
          token: action.payload.token,
        })
      );
      state.user_id = action.payload.user_id;
      state.token = action.payload.token;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser } = authSlice.actions;

export default authSlice.reducer;


