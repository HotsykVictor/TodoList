import { useState, useEffect, useCallback } from "react";
import Form from "src/components/Form";
import TodoItem from "src/components/TodoItem";
import styles from "src/components/Todolist.module.css";

const TodoList = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("TaskList")) || []
  );

  useEffect(() => {
    localStorage.setItem("TaskList", JSON.stringify(items));
  }, [items]);

  const deleteItemHandler = useCallback(
    (e) => setItems((prevItems) => prevItems.filter((item) => item.id !== +e)),
    []
  );

  const editTaskHandler = useCallback((e, isEditing, id) => {
    if (!isEditing) {
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) => {
        return item.id !== id ? item : { ...item, text: e.target.value };
      })
    );
  }, []);

  const newTaskHandler = useCallback((inputedValue) => {
    setItems((prevItems) => [
      {
        text: inputedValue,
        id: Date.now(),
        isCompleted: false,
      },
      ...prevItems,
    ]);
  }, []);

  const completeHandler = useCallback((e) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === e ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }, []);

  return (
    <>
      <Form className={styles} onAddNewTask={newTaskHandler} />
      {!!items.length && (
        <ul className={styles.card}>
          {items.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              onDeleteTask={deleteItemHandler}
              onEditTask={editTaskHandler}
              onComplete={completeHandler}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoList;
