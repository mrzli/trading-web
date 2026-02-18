import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type AppState = {
  selectedSymbol: string
}

const initialState: AppState = {
  selectedSymbol: 'BTCUSDT',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedSymbol: (state, action: PayloadAction<string>) => {
      state.selectedSymbol = action.payload
    },
  },
})

export const { setSelectedSymbol } = appSlice.actions
export const appReducer = appSlice.reducer