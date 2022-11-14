import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Initialization (fields to get via `useSelector`)
export interface LoginStateValue {
  isLogged: boolean;
  sessionToken?: string;
}
export interface LoginState {
  value: LoginStateValue;
}
const initialState: LoginState = { value: { isLogged: false } };

// Reducers
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // ⚠️ Do not directly do `state = ...` because it overwrites the `WritableDraft<LoginState>` variable instead of changing its state
      state.value = { isLogged: true, sessionToken: action.payload };
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
