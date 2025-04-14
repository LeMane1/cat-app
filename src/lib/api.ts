import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {CatPicture} from "@/lib/types";

export const catsApi = createApi({
  reducerPath: 'catsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com',
    prepareHeaders: (headers: Headers): Headers => {
      headers.set('accept', 'application/json')
      headers.set('x-api-key', process.env.CATS_API_KEY ?? '')
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