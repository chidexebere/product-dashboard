import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appId: 1,
  selectedPath: '/',
  isEditing: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    selectConfig(state, action) {
      state.appId = action.payload;
    },
    selectNav(state, action) {
      state.selectedPath = action.payload;
    },
    editPage(state) {
      state.isEditing = !state.isEditing;
    },
  },
});

export const { selectConfig, selectNav, editPage } = appSlice.actions;

export default appSlice.reducer;
