
import { useState } from 'react';
import './App.scss';
import shortid from 'shortid'
import {MdAddTask} from 'react-icons/md'
import AddTask from './Component/addtask/AddTask';

function App() {

 const[task,setTask]=useState("")
 let[tasks,setTasks]=useState([])
 let[show,setshow]=useState()
  const toggle=(id)=>{
  setTasks(tasks.map((T)=>{
    if(T.id === id){
      return {
        ...T,
        complete:!T.complete
      }
    }
    else {
      return T
    }
  }))
  
  }
  const handel=(e)=>{
    setshow(e)
  }
  if(show === "active"){
    tasks=tasks.filter(T=>T.complete)
  }
 else  if(show === "shownotactive"){
  tasks=tasks.filter(T=>!T.complete)
}


  const setItem=()=>{
    const id=shortid.generate()
    setTasks([{
    id:id,
    task,
    complete:false,
    },...tasks])
    setTask("")
  }

  const Delete=(id)=>{
  setTasks(tasks.filter(T=> T.id !== id))
  }
  const handelS=(e)=>{
  if(e === "all"){
    setTasks(tasks.map((T)=>{
      return {
        ...T,
        complete:true,
      }
    }))
  }            
  else if(e === "notactive"){
    setTasks(tasks.map((T)=>{
      return {
        ...T,
        complete:false,
      }
    }))
  }

  else if(e === "delete"){
    setTasks([])
  }
 

}

  return (
    <div className="App">
      <div className="parent">
              <div className="container">
                      <div className="allactive" onClick={()=>handelS("all")}>All active</div>
                      <div className="allnotactive" onClick={()=>handelS("notactive")}>All not active</div>
                      <div className="deleteall" onClick={()=>handelS("delete")}>Delete all</div>
                      <div className="showall" onClick={()=>handel("showall")}>Show all</div>
                      <div className="shownotactive" onClick={()=>handel("shownotactive")}>Show all not active</div>
                      <div className="showactive" onClick={()=>handel("active")}>show active</div>
              </div>
        <div className="add">
          <input
          type="text"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
          />
          <div 
          className="icon"
          onClick={setItem}
          >
            <MdAddTask/>
          </div>
        </div>
        {tasks.map((T)=>{
          return (<AddTask
             task={T} 
             Toggle={()=>toggle(T.id)} 
             key={T.id}
             delete={()=>Delete(T.id)}
             />)
        })}  
        </div>
    </div>
  );
}

export default App;
