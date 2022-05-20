import './App.css';
import TaskElement from './TaskElement';
import { React, useState } from 'react';
import { FormControl, Button, InputGroup, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
function App() {

  const [tasks, setTasks] = useState([

    {
      text: "Figure out React",
      isDone: false,
      toUpdate : false
    }
  ])

  const [newTask, setNewTask] = useState("");

  const [updateTaskId, setUpdateTaskId] = useState(-1);

  const addTask = task => {
    const newTasksList = [...tasks, task];
    setTasks(newTasksList);
    console.log(newTasksList);
  }

  const handleAddition = e => {
    e.preventDefault();

    console.log("hectic");
    console.log(newTask);

    // if it is empty, do nothing
    if (!newTask) return;

    console.log("Add element");

    let newT = {
        text: newTask,
        isDone: false
      }

    addTask(newT);
    setNewTask("");

    console.log("Added");
  };

  const checkTask = id => {
     const newTasksList = [...tasks];
     newTasksList[id].isDone = !newTasksList[id].isDone;
     setTasks(newTasksList);
  }

  const removeTask = id => {
    const newTasksList = [...tasks];
    newTasksList.splice(id,1);
    setTasks(newTasksList);
  }

  const updateTaskElement = id => {
    setUpdateTaskId(id);
    const newTasksList = [...tasks];
    newTasksList[id].toUpdate = !newTasksList[id].toUpdate;
    setTasks(newTasksList);
    setNewTask(newTasksList[id].text);
  }

  const updateTask = (newText) => {

    if (updateTaskId === -1) return;

    const newTasksList = [...tasks];

    newTasksList[updateTaskId].text = newText;
    newTasksList[updateTaskId].toUpdate = !newTasksList[updateTaskId].toUpdate;

    setTasks(newTasksList);
    setUpdateTaskId(-1);
    setNewTask("");
     
  }

  // well trying things
  const btn = {
    backgroundColor:'#00695c',
    color : 'white',
    borderColor : '#004d40'
  }

  //#00261f

  

  return (

      <Card 
        className='z-depth-3'
        style={{
          backgroundColor : '#004d40',
          color: 'white',
          marginLeft : 'auto', marginRight: 'auto', marginTop: 50, marginBottom: 50, width: '500px'}}>

        <Card.Body style={{margin : '0.4em'}}>

          <Card.Title className='text-center'
          >What are we doing today?</Card.Title>
          
          <div className="Todos" style={{marginTop : '1.5em'}}>
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

          <InputGroup style={{marginTop : '1.5em',
            borderColor : '#004d40'
          }}>
              
              <FormControl
                  placeholder="E.g. Go Shopping"
                  type="text"
                  className="input"
                  value={newTask}
                  onChange={e => setNewTask(e.target.value)}
              />
              
              <Button 
                style = {btn}
                  variant="outline-secondary"
                  onClick={handleAddition}
              >Add</Button>

              <Button 
              style = {btn}
                  variant="outline-secondary"
                  onClick={() => updateTask(newTask)}
              >Update</Button>

          </InputGroup>

        </Card.Body>


      </Card>


  );
}

export default App;
