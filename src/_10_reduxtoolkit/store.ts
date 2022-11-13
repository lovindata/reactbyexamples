import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initialization (fields to get via `useSelector`)
export interface LoginState {
    isLogged: boolean;
    sessionToken?: string
}
const initialState: LoginState = { isLogged: false }

// Reducers
const loginSlice = createSlice({
    name: "loginState",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state = { isLogged: true, sessionToken: action.payload }
        },
        logout: (state) => {
            state = initialState
        }
    }
});

// Exporting (To use via `useDispatch`)
export const { login, logout } = loginSlice.actions;
export const store = configureStore({
    reducer: {
        loginState: loginSlice.reducer
    }
});