import './addtask.scss'

function AddTask(props) {
  return (
    <div className='addtask'>
      <div 
      className={"taskname "+ (props.task.complete ? "done":"") }
      onClick={props.Toggle}
      >
      {props.task.task}
      </div>
      <div className="deletetask">
        <div
         className={"Complete "+(props.task.complete?"done":"")}
         >Done</div>
        <div 
        className="delete"
        onClick={props.delete}>Delete</div>    
      </div>
    </div>
  )
}

export default AddTask