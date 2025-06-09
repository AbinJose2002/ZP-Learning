import React, { useEffect, useState } from 'react'

type Props = {}

const baseStyle = {
    border:"none"
}

export default function Hello({}: Props) {
    type task1 = {
        item?: string,
        complete?: boolean;
    }


    const [page, setPage] = useState('Ongoing')
    const [task, setTask] = useState('')
    const [toDoList, setToDoList] = useState<task1[]>([])

    useEffect(() => {
  const tasksString = localStorage.getItem('tasks');
  if (tasksString) {
    setToDoList(JSON.parse(tasksString));
  }
}, []);


    useEffect(() => {
    //   console.log(toDoList)
    }, [toDoList])

    const handleUndoComplete = (index:number) => {
      if(confirm("Are you sure to unmark Complete?")){
            const updatedTasks = toDoList.map((task, i) =>
                i === index ? { ...task, complete: false } : task
        );
        setToDoList(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
    }
    
    const handleDelete = (indexToRemove:number) => {
        if(confirm("Are you sure to delete?")){
            const updatedTasks = toDoList.filter((_, index) => index !== indexToRemove);
            // console.log(updatedTasks)
            setToDoList(updatedTasks)
            localStorage.setItem('tasks', JSON.stringify(updatedTasks))
            setTask('')
        }
    }

    const handleComplete = (index:number) => {
        if(confirm("Are you sure to mark Complete?")){
            const updatedTasks = toDoList.map((task, i) =>
                i === index ? { ...task, complete: true } : task
        );
        setToDoList(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
    }

    const handleEdit = (index: number, task: string | undefined) => {
    const editValue = prompt("Enter your new task", task);
    if (editValue !== null && editValue.trim() !== "") {
        const updatedTasks = toDoList.map((item, editIndex) =>
            editIndex === index ? { ...item, item: editValue } : item
        );
        setToDoList(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
};

const glassStyle = {
  background: "rgba(74, 144, 226, 0.25)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(10.5px)",
  WebkitBackdropFilter: "blur(10.5px)",
  borderRadius: "10px",
  border: "1px solid rgba(255, 255, 255, 0.18)"
};



  return (
    <div className='col-8 mx-auto p-4' style={glassStyle}>
        <div><h1>✏️ To Do List</h1></div><br />
        <div className='d-flex flex-column  col-10 mx-auto justify-content-between'>
            <input type="text" className='form-control' placeholder='Enter your task' value={task} required onChange={(e)=>setTask(e.target.value)}/>
            <button className="btn btn-success my-2" onClick={()=>{
                const tasks:task1 = {
                    item: task,
                    complete: false
                }
                const updatedList = [...toDoList, tasks]
                setToDoList(updatedList)
                localStorage.setItem('tasks', JSON.stringify(updatedList))
                setTask('')
            }}>Add Task</button>
        </div><br />
        <div className="nav-tabs d-flex justify-content-around col-11 mx-auto" style={baseStyle}>
            <button className={`btn d-flex text-center col-5 ${page === 'Ongoing' ? "btn-primary" : "btn-outline-primary"}`} onClick={()=>setPage('Ongoing')}>Ongoing</button>
            <button className={`btn d-flex text-center col-5 ${page === 'Completed' ? "btn-primary" : "btn-outline-primary"}`} onClick={()=>setPage('Completed')}>Completed</button>
        </div><br />
        <h1>{page} Tasks!</h1>
            <div>
  {toDoList.map((task, index) =>
    page === 'Ongoing'
      ? !task.complete && (
          <div
            key={index}
            className="col-10 mx-auto d-flex justify-content-between align-items-center"
            style={{ backgroundColor: "#59c5fe", borderBottom: "2px solid black", borderRadius: "20px", padding: "10px", marginBottom: "10px" }}
          >
            <div className='d-flex'><input type="checkbox" className='mx-3' onClick={() => handleComplete(index)}/>
            <p className='mb-0'>{task.item}</p></div>
            <div>
              <button style={{ border: "none", background: "transparent" }} onClick={() => handleEdit(index, task.item)}>✏️</button>
              <button style={{ border: "none", background: "transparent" }} onClick={() => handleDelete(index)}>🗑️</button>
              {/* <button style={{ border: "none", background: "transparent" }} onClick={() => handleComplete(index)}>✔︎</button> */}
              
            </div>
          </div>
        )
      : task.complete && (
         <div
  key={index}
  className="d-flex justify-content-center mb-3"
>
  <div
    className="col-10 d-flex justify-content-between align-items-center" style={{borderBottom: "2px solid black", backgroundColor: "#d4edda", borderRadius: "20px", padding: "10px",}}>
    <s className="d-flex align-items-center">
      <div className='d-flex'>
        <input type="checkbox" className='mx-3' onClick={() => handleUndoComplete(index)} checked={task.complete}/>
            <p className='mb-0'>{task.item}</p></div>
    </s>
    <button style={{ border: "none", background: "transparent" }} onClick={() => handleDelete(index)}>🗑️</button>
  </div>
</div>

        )
  )}
</div>
  <p>Where <span style={{color: "green"}}>productivity</span> meets <span style={{color: "blue"}}>clarity</span></p>
    </div>
  )
}