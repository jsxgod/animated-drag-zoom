import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opened: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state, action) => {
      state.opened = true;
    },
    closeMenu: (state, action) => {
      state.opened = false;
    },
    toggleMenu: (state, action) => {
      state.opened = !state.opened;
    },
  },
});

export const { toggleMenu, openMenu, closeMenu } = menuSlice.actions;

export default menuSlice.reducer;
