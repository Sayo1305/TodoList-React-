import { useState } from "react";
import Edittask from "../modals/Edittask";

const colors = [
    {
        primarycolor : "#65b6fc",
        secondarycolor: "#0467bd"
    },
    {
        primarycolor : "#07f0a6",
        secondarycolor: "#029e6c"
    },
    {
        primarycolor : "#f57fe7",
        secondarycolor: "#c702b0"
    },
    {
        primarycolor : "#fc3721",
        secondarycolor: "#910f00"
    },
    {
        primarycolor : "#eaed15",
        secondarycolor: "#decd10"
    },
    {
        primarycolor : "#f7900a",
        secondarycolor: "#b86d0d"
    },
    {
        primarycolor : "#74f7e8",
        secondarycolor: "#04cfb7"
    }
];
const Cards = ({tasklist, index , delete_task , updatetaskarr})=> {
    const [modal , setmodal] = useState(false);
    const toggle = ()=>{
        setmodal(!modal);
    }
    const updatetask = (taskobj)=>{
        updatetaskarr(taskobj , index);
    }
    const handle_delete = ()=>{
        delete_task(index);
    }
  return (
    <>
    <div className='cards'>
        <div className="line" style={{"backgroundColor" : colors[index%5].primarycolor}}></div>
        <div className="cards_head">
            {tasklist.task_name}
        </div>
        <div className="cards_desc">
            <p>
            {tasklist.description_name}
            </p>
        </div>
        <div className="cards_footer">
        <button className="button_3" onClick={()=>{ setmodal(true);}} style={{"color" : colors[index%5].secondarycolor}}><i class="fa-solid fa-pen-to-square"></i></button>
        <button className="button_3" onClick={handle_delete} style={{"color" : colors[index%5].secondarycolor}}><i class="fa-solid fa-delete-left"></i></button>
        </div>
    </div>
    <Edittask modal={modal} toggle={toggle} updatetask={updatetask} taskobj={tasklist}/>
    </>
  )
}
export default Cards;
