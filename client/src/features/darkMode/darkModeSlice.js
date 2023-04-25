// import createSlice from redux-toolkit
import { createSlice } from '@reduxjs/toolkit';

// create slice for dark mode
export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    value: localStorage.getItem('darkMode') === 'true',
  },
  reducers: {
    TOGGLE_DARKMODE: (state) => {
      const newState =  {
        ...state,
        value: !state.value,
      };
      localStorage.setItem('darkMode', newState.value.toString());
      return newState;
    },
  },
});

// export actions from darkModeSlice
export const { TOGGLE_DARKMODE } = darkModeSlice.actions;

// export darkMode reducer
export default darkModeSlice.reducer;
