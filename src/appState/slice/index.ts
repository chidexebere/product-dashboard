import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appId: 1,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    selectConfig(state, action) {
      state.appId = action.payload;
    },
  },
});

export const { selectConfig } = appSlice.actions;

export default appSlice.reducer;
