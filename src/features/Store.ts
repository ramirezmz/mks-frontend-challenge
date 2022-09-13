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
    removeProduct: (state, action) => {
      state.value = state.value.filter((user) => user.id !==action.payload.id)
    },
    handleSidebar: (state, action) => {
      state.sidebar = action.payload
      console.log(action.payload)
    }
  }
})

export const {addProduct, handleSidebar, removeProduct} = userSlice.actions

export default userSlice.reducer