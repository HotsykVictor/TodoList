import { useState, memo } from "react";
import styles from "src/components/TodoItem.module.css";

const TodoItem = ({ item, onDeleteTask, onEditTask, onComplete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const editTaskHandler = (e) => {
    setIsEditing((prev) => !prev);
    onEditTask(e, isEditing, item.id);
  };

  return (
    <li>
      {isEditing ? (
        <textarea
          rows={Math.round(item.text.length / 40) || 1}
          onBlur={editTaskHandler}
          defaultValue={item.text}
          autoFocus
        />
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

export default memo(TodoItem);
