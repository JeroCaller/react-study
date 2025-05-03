import { Provider } from "react-redux";
import TodoList from "../components/todo/TodoList";
import UserDisplay from "../components/todo/UserDisplay";
import todoStore from "../redux/todo/todoStore";

/**
 * 간단한 Todo 페이지. 
 * 
 * rtk까지 활용한 예제
 * 
 * @returns 
 */
const TodoPage = () => {

  return (
    <Provider store={todoStore}>
      <div className="todo-page">
        <UserDisplay />
        <hr/>
        <TodoList />
      </div>
    </Provider>
  );
};

export default TodoPage;
