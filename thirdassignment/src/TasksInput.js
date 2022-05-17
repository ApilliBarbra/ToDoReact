import { useState } from "react";

// adding a Task : get the icon
// editing a Task

function TasksInput ({ addTask, updateTask }) {

    const [newTask, setNewTask] = useState("");

    const handleAddition = e => {
        e.preventDefault();

        console.log("hectic");
        console.log(newTask);

        // if it is empty, do nothing
        if (!newTask) return;

        console.log("Add element");

        let newT =     {
            text: newTask,
            isDone: false
          }

        addTask(newT);
        setNewTask("");

        console.log("Added");
    };

    return (
        <form>

            <input
                type="text"
                className="input"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
            >
            </input>

            <button
                onClick={() => handleAddition}
            >
                Add
            </button>

            <button
                onClick={() => updateTask(newTask)}
            >
                Update
            </button>

        </form>
    )

}


export default TasksInput;