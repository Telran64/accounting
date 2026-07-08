import {configureStore} from "@reduxjs/toolkit";
import token from "../features/token/tokenSlice.ts";
import {accountingApi} from "../features/api/accountingApi.ts";

export const store = configureStore({
    reducer: {
        token,
        [accountingApi.reducerPath]: accountingApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(accountingApi.middleware),
    preloadedState: JSON.parse(localStorage.getItem('state') || '{}') as { token: string}
})

store.subscribe(() => localStorage.setItem('state', JSON.stringify({token: store.getState().token})))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch