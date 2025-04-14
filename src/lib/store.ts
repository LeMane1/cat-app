import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {catsApi} from "@/lib/api";
import catsReducer from '@/lib/catsSlice'

const rootReducer = combineReducers({
  [catsApi.reducerPath]: catsApi.reducer,
  catsReducer,
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catsApi.middleware)
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']