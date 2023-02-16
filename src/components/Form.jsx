import { useRef, memo } from "react";
import className from "src/components/Todolist.module.css";

const Form = ({ onAddNewTask }) => {
  const refButton = useRef(null);

  const newTaskHandler = (e) => {
    e.preventDefault();
    if (refButton.current.value) {
      onAddNewTask(refButton.current.value);
      refButton.current.value = null;
    }
  };

  return (
    <form onSubmit={newTaskHandler} className={className.card}>
      <label>Input your task</label>
      <input type="text" spellCheck={false} ref={refButton} />
      <button className={className.button}>Add new task</button>
    </form>
  );
};

export default memo(Form);
