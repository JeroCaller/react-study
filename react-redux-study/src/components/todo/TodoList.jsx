import { useDispatch, useSelector } from "react-redux";
import { addTodo, selectTodo } from "../../redux/todo/slices/todoSlice";
import { getMaxIdOfTodoItems } from "../../utils/todoUtils";
import TodoItem from "./todo/TodoItem";

const TodoList = () => {
  
  /**
   * @type {Array<import("../../redux/todo/slices/todoSlice").TodoItem>}
   */
  const todoItems = useSelector(selectTodo);
  const dispatch = useDispatch();

  const handleNewItem = () => {
    const nextItemId = getMaxIdOfTodoItems(todoItems) + 1;
    dispatch(addTodo({
      id: nextItemId,
      content: '',
      isCompleted: false
    }));
  };

  let itemsJsx = null;
  
  if ((todoItems === undefined || null) || todoItems.length === 0) {
    itemsJsx = <p>No Items</p>
  } else {
    itemsJsx = todoItems.map(data => <TodoItem key={data.id} todoItemData={data} />);
  }

  return (
    <div className="todolist">
      {/* 투두 아이템 추가 폼 */}
      <button onClick={handleNewItem}>새 항목 추가</button>

      {/*  전체 투두 아이템 목록 보이기 */}
      {itemsJsx}
    </div>
  );
};

export default TodoList;
