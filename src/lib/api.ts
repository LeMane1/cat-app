import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {CatPicture} from "@/lib/types";

export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com',
    prepareHeaders: (headers: Headers): Headers => {
      headers.set('accept', 'application/json')
      headers.set('x-api-key', 'live_iBzlZVGgMO6vLOOIuZV5YV3jN0rZBTngccXo1bh3F1bKV1GffbzG3Faxj5W8On7k')
      return headers
    },
  }),
  endpoints: (builder) => ({
    getCats: builder.query<CatPicture[], void>({
      query: () => ({
        url: `v1/images/search`,
        method: 'GET'
      })
    })
  }),
})

export const {useLazyGetCatsQuery} = catsApi