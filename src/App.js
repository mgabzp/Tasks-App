import React, { useEffect, useState } from "react";
import { TaskRow } from "./components/TaskRow";
import {TaskBanner} from "./components/TaskBanner";
import { TaskCreator } from "./components/TaskCreator";
import { VisibilityControl } from "./components/VisibilityControl";

const App = () => {
 
  const [taskItems, setTaskItems] = useState([]);

  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    let data= localStorage.getItem('tasks');
    if (data != null){
      setTaskItems(JSON.parse(data));
    } else {
      setTaskItems([])
      setShowCompleted (true)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
    
  }, [taskItems]);

  const addNewTask= taskName =>{
    if (!taskItems.find(t=> t.name === taskName)){
      setTaskItems([...taskItems, {name: taskName, done: false}])
    }
  }
  
  const toogleTask= task =>
  setTaskItems(taskItems.map(t=> (t.name===task.name ? {...t, done: !t.done}: t)))


  const taskTableRows = (doneValue) =>
    taskItems
    .filter(task=> task.done ===doneValue)
    .map(task =>(
      <TaskRow task={task} key={task.name} toogleTask={toogleTask}/>
));
  

  return (
    <div className="container-fluid">
    <div className="col col-md-6 offset-md-3">
      <TaskBanner taskItems={taskItems}/>

      <TaskCreator addNewTask={addNewTask} />
      <table className="table table-striped table-bordered my-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(false)}</tbody>
      </table>
      <div className="bg-dark-text-white text-center p-2">
        <VisibilityControl isChecked={showCompleted} addNewTask= {checked=> setShowCompleted(checked)} />

      </div>

      {
        showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {taskTableRows(true)}
            </tbody>

          </table>
        )
      }
    </div>
    </div>
  );
};

export default App;
