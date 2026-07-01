import {createSlice} from "@reduxjs/toolkit";
import type {UserProfile} from "../../utils/types";
import {fetchUser, registerUser, updateUser} from "../api/accountingApi.ts";

const initialState = {} as UserProfile;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (_, action) => action.payload,
        setFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        setLastName: (state, action) => {
            state.lastName = action.payload;
        },
        clearUser: () => initialState,
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.fulfilled, (_, action) => action.payload.user)
            .addCase(fetchUser.fulfilled, (_, action) => action.payload.user)
            .addCase(updateUser.fulfilled, (state, action) => {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
            })
    }
})

export const {setUser, setFirstName, setLastName, clearUser} = userSlice.actions;
export default userSlice.reducer;