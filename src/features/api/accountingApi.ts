import type {UserProfile, UserRegister, UserUpdate} from "../../utils/types";
import {BASE_URL} from "../../utils/constants.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {RootState} from "../../app/store.ts";

const authEndpoints = ['updateUser'];

export const accountingApi = createApi({
    reducerPath: 'accountingApi',
    tagTypes: ['profile'],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, {getState, endpoint}) => {
            if (authEndpoints.includes(endpoint)) {
                headers.set('Authorization', (getState() as RootState).token);
            }
            return headers;
        }
    }),
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
            }),
            providesTags: ['profile']
        }),
        updateUser: builder.mutation<UserProfile, { user: UserUpdate, login: string }>({
            query: ({user, login}) => ({
                url: `/account/user/${login}`,
                method: 'PATCH',
                body: user
            }),
            invalidatesTags: ['profile']
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

export const {
    useRegisterUserMutation,
    useLazyFetchUserQuery,
    useFetchUserQuery,
    useChangePasswordMutation,
    useUpdateUserMutation
} = accountingApi