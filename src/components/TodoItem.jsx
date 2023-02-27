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
          rows={
            window.innerWidth < 600
              ? (item.text.length * 25) / window.innerWidth
              : Math.round(item.text.length / 40) || 1
          }
          onBlur={editTaskHandler}
          defaultValue={item.text}
          spellCheck={false}
          autoFocus
        />
      ) : (
        <p
          className={item.isCompleted ? styles.completed : ""}
          onDoubleClick={editTaskHandler}
          onClick={() => onComplete(item.id)}
          spellCheck={false}
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
