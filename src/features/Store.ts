import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'store',
  initialState: { 
    value: [],
    sidebar: false
  },
  reducers: {
    addProduct: (state, action) => {
      state.value.push(action.payload)
    },
    handleSidebar: (state, action) => {
      state.sidebar = action.payload
      console.log(action.payload)
    }
  }
})

export const {addProduct, handleSidebar} = userSlice.actions

export default userSlice.reducer