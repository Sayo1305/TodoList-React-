import { useState  , useEffect} from 'react';
import './App.css';
import Create_Todo from './modals/Create_Todo';
import Cards from './components/Cards';
const App = ()=>  {
  const [modals , setmodals] = useState(false);
  const [taskslist , setasklist] = useState([]);
  useEffect (() => {
    let arr = localStorage.getItem('tasklist');
    if(arr)
    {
      let obj = JSON.parse(arr);
      setasklist(obj);
    }
  }, []);
  const delete_task = (index) =>{
    let templist = taskslist;
    templist.splice(index , 1);
    localStorage.setItem("tasklist" , JSON.stringify(templist));
    setasklist(templist);
    window.location.reload();
  }
  const toggle = ()=>{
    setmodals(!modals);
  }
  const save_list = (task_obj) =>{
    let temptask = taskslist;
    temptask.push(task_obj);
    localStorage.setItem("tasklist" , JSON.stringify(temptask));
    setasklist(temptask);
    //console.log(temptask);
  }
  const updatetaskarr = (task , index)=>{
    let templist = taskslist;
    templist[index] = task;
    localStorage.setItem("tasklist" , JSON.stringify(templist)); 
    setasklist(templist);
    window.location.reload();
  }
  return (
    <div className="App">
      <div className="head">
        Todo app
      </div>
      <div className="create">
        <button className='button_create' onClick={()=>{
          setmodals(true);
        }}>Create</button>
      </div>
      <Create_Todo modal={modals} toggle={toggle} save={save_list}/>
      <div className='container'>
        {taskslist && taskslist.map((t , idx)=>
          <Cards tasklist = {t} index = {idx} delete_task = {delete_task} updatetaskarr={updatetaskarr} />
        )}
      </div>
    </div>
  );
}

export default App;
