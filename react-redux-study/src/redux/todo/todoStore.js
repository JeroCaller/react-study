import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice';
import todoReducer from './slices/todoSlice';

const todoStore = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
  },
});

export default todoStore;
