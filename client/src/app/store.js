//  import configureStore API from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// import reducers
import darkModeReducer from '../features/darkMode/darkModeSlice';


// create store with reducers
const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});

// export store
export default store;
