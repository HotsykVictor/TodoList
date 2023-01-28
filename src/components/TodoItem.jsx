import { useState } from "react";
import styles from "src/components/TodoItem.module.css";
const TodoItem = ({ item, onDeleteTask, onEditTask, onComplete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const deleteTaskHandler = () => {
    onDeleteTask(item.id);
  };
  const completeHandler = () => {
    onComplete(item.id);
  };
  const editTaskHandler = (e) => {
    setIsEditing((prev) => !prev);
    onEditTask(e, item.id);
  };
  console.log(item.text.length);
  return (
    <li>
      {isEditing === true ? (
        <textarea
          rows={Math.round(item.text.length / 40) || 1}
          onBlur={editTaskHandler}
          defaultValue={item.text}
          autoFocus
        ></textarea>
      ) : (
        <p
          className={item.isCompleted ? styles.completed : ""}
          onDoubleClick={editTaskHandler}
          onClick={completeHandler}
        >
          {item.text}
        </p>
      )}

      <button className={styles.button} onClick={deleteTaskHandler}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
