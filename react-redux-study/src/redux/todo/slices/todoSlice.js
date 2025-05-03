import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {Object} TodoItem
 * @property {Number} id - 투두 아이템의 고유 번호
 * @property {String} content - 투두에 보일 내용.
 * @property {Boolean} isCompleted - 투두 성취 여부
 */

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    /**
     * @param {Array<TodoItem>} todoItems
     */
    todoItems: [],
  },
  reducers: {
    /**
     * 투두 리스트에 아이템 하나를 추가
     * 
     * @param {Object} state 
     * @param {Array<TodoItem>} state.todoItems
     * @param {Object} action 
     * @param {TodoItem} action.payload
     */
    addTodo: (state, action) => {
      state.todoItems.push(action.payload);
    },
    /**
     * 투두 리스트의 특정 아이템의 내용 변경
     * 
     * @param {Object} state 
     * @param {Array<TodoItem>} state.todoItems
     * @param {Object} action 
     * @param {TodoItem} action.payload
     */
    updateTodo: (state, action) => {
      const targetIdx = state.todoItems
        .findIndex(item => item.id === action.payload.id);
      state.todoItems[targetIdx] = action.payload;
    },
    /**
     * 특정 투두 아이템 하나를 삭제
     * 
     * @param {Object} state 
     * @param {Array<TodoItem>} state.todoItems
     * @param {Object} action 
     * @param {TodoItem} action.payload
     */
    deleteTodo: (state, action) => {
      const targetIdx = state.todoItems
        .findIndex(item => item.id === action.payload.id);
      state.todoItems.splice(targetIdx, 1);
    },
  },
  selectors: {
    selectTodo: state => state.todoItems,
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export const { selectTodo } = todoSlice.selectors;
export default todoSlice.reducer;
