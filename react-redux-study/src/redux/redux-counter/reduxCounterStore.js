import { configureStore } from '@reduxjs/toolkit';
import countReducer from './countReducer';

const reduxCounterStore = configureStore({
  reducer: countReducer,
});

export default reduxCounterStore;