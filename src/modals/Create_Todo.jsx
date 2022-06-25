import React , {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const Create_Todo = ({modal , toggle , save}) => {
    const [tasksname , setasksname] = useState('');
    const [description , setdescription] = useState('');
    const handle_change = (e) =>{
        const {name , value} = e.target;
        if(name === 'task_name')
        {
            setasksname(value);
        }
        else{
            setdescription(value);
        }
    }
    const handle_save = ()=>{
        let temptask = {};
        temptask['task_name']  = tasksname;
        temptask['description_name'] = description;
        toggle();
        save(temptask);
    }
    return (
        <div className='create_task'>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} className='heading' >Create task</ModalHeader>
                <ModalBody>
                    <form className='forms'>
                        <label className='form_head'>Title</label>
                        <input  className='input_tag' type='text' name='task_name' value={tasksname} onChange={handle_change}></input>
                        <label className='form_head'>Description</label>
                        <textarea className='input_tag' value={description} name='description_name' onChange={handle_change}></textarea>
                    </form>
                </ModalBody>
                <ModalFooter className='create_task_footer'>
                    <Button className='button_2' onClick={handle_save}>Create</Button>
                    <Button  className='button_2' onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Create_Todo;