import type {UserProfile, UserRegister, UserUpdate} from "../../utils/types";
import {BASE_URL} from "../../utils/constants.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const accountingApi = createApi({
    reducerPath: 'accountingApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: builder => ({
        registerUser: builder.mutation<UserProfile, UserRegister>({
            query: user => ({
                url: '/account/register',
                method: 'POST',
                body: user
            })
        }),
        fetchUser: builder.query<UserProfile, string>({
            query: token => ({
                url: '/account/login',
                method: 'POST',
                headers: {
                    Authorization: token
                }
            })
        }),
        updateUser: builder.mutation<UserProfile, { user: UserUpdate, login: string, token: string }>({
            query: ({user, login, token}) => ({
                url: `/account/user/${login}`,
                method: 'PATCH',
                body: user,
                headers: {
                    Authorization: token
                }
            })
        }),
        changePassword: builder.mutation<void, { newPassword: string, token: string }>({
            query: ({newPassword, token}) => ({
                url: '/account/password',
                method: 'PATCH',
                body: {password: newPassword},
                headers: {
                    Authorization: token
                }
            })
        })
    })
})

export const {useRegisterUserMutation, useLazyFetchUserQuery, useFetchUserQuery, useChangePasswordMutation, useUpdateUserMutation} = accountingApi