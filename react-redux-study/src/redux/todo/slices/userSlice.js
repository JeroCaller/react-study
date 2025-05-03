import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {Object} User
 * @property {String} username
 * @property {String} message
 */

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: 'anonymous',
    message: 'no message',
  },
  reducers: {
    /**
     * 
     * @param {User} state 
     * @param {Object} action 
     * @param {User} action.payload
     */
    inputUserInfo: (state, action) => {
      state.username = action.payload.username;
      state.message = action.payload.message;
    },
  },
  selectors: {
    selectUser: state => state,
  },
});

export const { inputUserInfo } = userSlice.actions;
export const { selectUser } = userSlice.selectors;
export default userSlice.reducer;
