import { configureStore } from '@reduxjs/toolkit'

import { backendApi } from '@/app/services/backend-api'
import { appReducer } from '@/app/state/app-slice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    [backendApi.reducerPath]: backendApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(backendApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch