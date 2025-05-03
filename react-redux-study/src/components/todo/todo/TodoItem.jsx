import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../../redux/todo/slices/todoSlice";

/**
 * 
 * @param {Object} props
 * @param {import("../../../redux/todo/slices/todoSlice").TodoItem} props.todoItemData 
 * @returns 
 */
const TodoItem = ( { todoItemData } ) => {

  const dispatch = useDispatch();
  const [ isReadOnly, setIsReadOnly ] = useState(true);

  // 저장 버튼을 누를 때에만 redux state에 반영하기 위해 
  // 사용자가 입력한 텍스트를 임시로 저장하기 위한 용도의 state
  const [ localContent, setLocalContent ] = useState(todoItemData.content);

  const handleChangeCheckBox = () => {
    dispatch(updateTodo({
      ...todoItemData,
      isCompleted: !todoItemData.isCompleted,
    }));
  };

  const handleEditTodoItem = () => {
    // 수정된 투두 텍스트를 redux state에 업데이트.
    if (!isReadOnly) {
      dispatch(updateTodo({
        ...todoItemData,
        content: localContent,
      }));
    }

    setIsReadOnly(!isReadOnly);
  };

  const handleTextOnChange = event => {
    setLocalContent(event.target.value);
  };

  const handleDeleteTodoItem = () => {
    dispatch(deleteTodo(todoItemData));
  };

  return (
    <div className="todo-item">
      <p>{todoItemData.id}</p>
      <input 
        type="text" 
        value={localContent} 
        disabled={isReadOnly} 
        onChange={handleTextOnChange} 
      />
      <input 
        type="checkbox" 
        defaultChecked={todoItemData.isCompleted} 
        onChange={handleChangeCheckBox} 
      />
      <button onClick={handleEditTodoItem}>{isReadOnly ? '편집' : '저장'}</button>
      <button onClick={handleDeleteTodoItem}>삭제</button>
    </div>
  );
};

export default TodoItem;
