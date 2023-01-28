import { useRef } from "react";

const Form = ({ onAddNewTask, className }) => {
  const newTaskHandler = (e) => {
    e.preventDefault();
    if (refButton.current.value) {
      onAddNewTask(refButton.current.value);
      refButton.current.value = "";
    }
  };
  const refButton = useRef("");
  return (
    <form onSubmit={newTaskHandler} className={className.card}>
      <label>Input your task</label>
      <input type="text" ref={refButton} />
      <button className={className.button}>Add new task</button>
    </form>
  );
};
export default Form;
