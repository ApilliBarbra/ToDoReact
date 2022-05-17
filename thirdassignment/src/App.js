import { useState } from 'react';
import './App.css';
import TaskElement from './TaskElement';
import TasksInput from './TasksInput';




function App() {

  const [tasks, setTasks] = useState([

    {
      text: "Figure out React",
      isDone: false,
      toUpdate : false
    }
  ])

  const [updateId, setUpdateId] = useState(-1);

  const addTask = task => {
    const newTasksList = [...tasks, task];

    setTasks(newTasksList);

    console.log(newTasksList);
  }

  const checkTask = id => {
     const newTasksList = [...tasks];
     newTasksList[id].isDone = !newTasksList[id].isDone;
     setTasks(newTasksList);
  }

  const updateTaskElement = id => {
    setUpdateId(id);
    const newTasksList = [...tasks];
     newTasksList[id].toUpdate = !newTasksList[id].toUpdate;
     setTasks(newTasksList);
    console.log("Updated the id " + id);
  }

  const updateTask = (newText) => {

    console.log("Id to udoate : " + updateId);

    if (updateId === -1) return;

    const newTasksList = [...tasks];

    newTasksList[updateId].text = newText;

    newTasksList[updateId].toUpdate = !newTasksList[updateId].toUpdate;

    setTasks(newTasksList);
    setUpdateId(-1);
     
  }

  const removeTask = id => {

    const newTasksList = [...tasks];
    newTasksList.splice(id,1);
    setTasks(newTasksList);
  }

  return (
    <div className="ToDoApp">

      <div>
      {tasks.map((task, index) => (

<TaskElement 
      task={task}
      key={index}
      id = {index}
      updateTaskElement={updateTaskElement}
      checkTask={checkTask}
      removeTask={removeTask}
/>

))}

      </div>



      <TasksInput 
        addTask={addTask}
        updateTask={updateTask}
      />

    </div>
  );
}

export default App;
