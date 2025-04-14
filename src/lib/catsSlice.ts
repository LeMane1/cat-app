import { createSlice } from '@reduxjs/toolkit'

export interface DefaultState {
  isGetCatsAbilityEnabled: boolean;
  isAutoRefreshEnabled: boolean;
}

const initialState: DefaultState = {
  isGetCatsAbilityEnabled: true,
  isAutoRefreshEnabled: false,
}

export const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    changeGetCatsAbility: (state) => {
      state.isGetCatsAbilityEnabled = !state.isGetCatsAbilityEnabled
      if (!state.isGetCatsAbilityEnabled) state.isAutoRefreshEnabled = false
    },
    changeAutoRefresh: (state) => {
      state.isAutoRefreshEnabled = !state.isAutoRefreshEnabled
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  changeGetCatsAbility,
  changeAutoRefresh
} = catsSlice.actions

export default catsSlice.reducer