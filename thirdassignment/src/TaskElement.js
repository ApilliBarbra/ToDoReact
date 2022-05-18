import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TaskElement ({task, id, updateTaskElement, checkTask, removeTask}) {
    
    return (

        <div
            className="task"
            style={{display : task.toUpdate? "none" : "flex"}}
        >

            <Form.Check
                type="checkbox"
                defaultChecked={task.isDone}
                onChange={e => checkTask(id)}
            />

            <p style={{textDecoration : task.isDone ? "line-through" : ""}}>
                {task.text}
            </p>
            
            <Button onClick={() => removeTask(id)}>
                delete
            </Button>

            <Button onClick={() => updateTaskElement(id)}>
                update;
            </Button>

        </div>

    )

}

export default TaskElement;