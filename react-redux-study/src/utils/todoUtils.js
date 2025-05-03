/**
 * 현재 모든 투두 아이템들 중 id가 가장 큰 아이템 객체의 id 값 반환
 * 
 * @param {Array<import("../redux/todo/slices/todoSlice").TodoItem>} todoItems 
 * @return {Number} 최대 id 값
 */
const getMaxIdOfTodoItems = (todoItems) => {
  if (!todoItems || todoItems.length === 0) return 0;

  const itemWithMaxId = todoItems.reduce((prevItem, currentItem) => 
    (prevItem.id < currentItem.id) ? currentItem : prevItem
  );
  return itemWithMaxId.id;
};

export {
  getMaxIdOfTodoItems,
};
