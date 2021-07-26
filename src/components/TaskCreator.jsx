import React, { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTask] = useState("");

  const updateTasks = (e) => setNewTask(e.target.value);

  const createNewTask = () => {
    props.addNewTask(newTaskName);
    setNewTask("");
  };

  return (
    <div className="row my-3">
      <div className="col col-md-8">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add new task..."
              value={newTaskName}
              onChange={updateTasks}
            />
          </div>
        </form>
      </div>
      <div className="col col-md-4">
        <button className="btn btn-dark btn-creator" onClick={createNewTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};
