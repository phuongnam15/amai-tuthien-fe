import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLanguage: localStorage.getItem('language') || 'vn',
};

export const CustomizerSlice = createSlice({
  name: 'customizer',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.isLanguage = action.payload;
    },
  },
});

export const {
  setLanguage,
} = CustomizerSlice.actions;

export default CustomizerSlice.reducer;
