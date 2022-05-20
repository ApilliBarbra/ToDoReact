//import Button from "react-bootstrap/Button";
import {Col, Row, Container, Form, Button} from "react-bootstrap";
//import Form from 'react-bootstrap';

function TaskElement ({task, id, updateTaskElement, checkTask, removeTask}) {
    
      // well trying things
  const btn = {
    backgroundColor:'#00695c',
    color : 'white',
    borderColor : '#004d40'
  }


    return (

        <Container
        style={{
        color : 'white',
            display : task.toUpdate? "none" : "flex",
         //   textAlign : 'center',
            marginTop : '0.1em',
            marginBottom:'0.1em',
            alignItems: 'center',
           // justifyContent:'center'
           //className="task square border border-primary"
       
            //alignItems : 'center',
        }}
        >
 
                <Col
            xs = {1}

                style={{width : '6%',
                //maxHeight : '12px',
               // padding: '0'
                }}
                >
                <Form.Check
                type="checkbox"
                defaultChecked={task.isDone}
                onChange={e => checkTask(id)}
                />
                </Col>

                <Col
                      xs = {4}
                style={{ 
                    textAlign:'start',
    width : '60%',
    textDecoration : task.isDone ? "line-through" : ""}}>
                {task.text}
         
                </Col>

                <Col
             //   xs = {4}
                style={{width : '20%',
            textAlign: 'end'}}
                >
                <Button 
                style={btn}
                onClick={() => removeTask(id)}>
                delete
            </Button>

            <Button 
                style={btn}
                onClick={() => updateTaskElement(id)}>
                update
            </Button>
                </Col>

        </Container>
        
    )

}

export default TaskElement;