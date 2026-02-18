import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type DemoTodo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL ?? 'https://jsonplaceholder.typicode.com'

export const backendApi = createApi({
  reducerPath: 'backendApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  endpoints: (builder) => ({
    getDemoTodo: builder.query<DemoTodo, void>({
      query: () => '/todos/1',
    }),
  }),
})

export const { useGetDemoTodoQuery } = backendApi