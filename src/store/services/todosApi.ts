import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Favorite } from '@interfaces/favorite'

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    refetchOnFocus: true,
    refetchOnReconnect: true,
    tagTypes: ['Todos'],
    keepUnusedDataFor: 120,
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => `todos`,
            providesTags: ['Todos'],
        })
    }),
})

export const {
    useGetTodosQuery,
} = todosApi
