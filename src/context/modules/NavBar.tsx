import { createSlice } from '@reduxjs/toolkit'
import { navBarInterfaceType } from '@/interface'

export const navBarSlice = createSlice({
  name: 'selectedMenu',
  initialState: {
    item: '',
    subItem: '',
  } as navBarInterfaceType,
  reducers: {
    setSelectedMenu: (state, action) => {
      state.item = action.payload.item
      state.subItem = action.payload.subItem
    },
  },
})

export const { setSelectedMenu } = navBarSlice.actions

export default navBarSlice.reducer
