import { useState } from "react";
import styles from "src/components/TodoItem.module.css";
const TodoItem = ({ item, onDeleteTask, onEditTask, onComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  console.log(item.text + "rerendered");
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const editTaskHandler = (e) => {
    setIsEditing((prev) => !prev);
    onEditTask(e, item.id);
  };
  return (
    <li>
      {isEditing ? (
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
          onClick={() => onComplete(item.id)}
        >
          {item.text}
        </p>
      )}

      <button className={styles.button} onClick={() => onDeleteTask(item.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
