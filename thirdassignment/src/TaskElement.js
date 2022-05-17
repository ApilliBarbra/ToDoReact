


function TaskElement ({task, id, updateTaskElement, checkTask, removeTask}) {
    
    return (

        <div
            className="task"
            style={{display : task.toUpdate? "none" : "flex"}}
        >

            <input
                type="checkbox"
                defaultChecked={task.isDone}
                onChange={e => checkTask(id)}
            >
            </input>

            <p style={{textDecoration : task.isDone ? "line-through" : ""}}>
                {task.text}
            </p>
            
            <button onClick={() => removeTask(id)}>
                del
            </button>

            <button onClick={() => updateTaskElement(id)}>
                updent;
            </button>

        </div>

    )

}

export default TaskElement;