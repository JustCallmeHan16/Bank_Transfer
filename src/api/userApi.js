import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath : 'userApi',
    tagTypes : ['Users'],
    baseQuery : fetchBaseQuery({ baseUrl : 'http://localhost:3000'}),
    endpoints : (builder) => ({
        getUsers : builder.query({
            query : (name) => `/${name}`,
            providesTags : ['Users']
        }),
        addAcount : builder.mutation({
            query : (newAccount) => ({
                url : '/users',
                method : 'POST',
                body : newAccount
            }),
            invalidatesTags : ['Users']
        }),
        updateAccount : builder.mutation({
            query : (newData) => ({
                url : `/users/${newData.id}`,
                method : 'PATCH',
                body : newData
            }),
            invalidatesTags : ['Users']
        }),
        rejectAccount : builder.mutation({
            query : (id) => ({
                url : `/users/${id}`,
                method : 'DELETE',
                body : id
            }),
            invalidatesTags : ['Users']
        })
    })
})

export const { useGetUsersQuery,useUpdateAccountMutation,useRejectAccountMutation,useAddAcountMutation } = userApi