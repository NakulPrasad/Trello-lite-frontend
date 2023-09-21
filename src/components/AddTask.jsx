import React, { useRef } from "react";

const AddTask = () => {
  const taskRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // socket.emit("createTask", { task });
    console.log(taskRef.current.value);
    // setTask("");
    taskRef.current.value = "";
  };
  return (
    <form className="form__input" onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        id="task"
        // value={task}
        className="input"
        required
        // onChange={(e) => setTask(e.target.value)}
        ref={taskRef}
      />
      <button className="addTodoBtn">ADD TASK</button>
    </form>
  );
};

export default AddTask;
