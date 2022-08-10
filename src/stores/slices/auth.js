import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: null
  },
  reducers: {
    update(state, action) {
      return action.payload
    },
  }
})

export const actions = authSlice.actions
export const reducer = authSlice.reducer
