import {useEffect, useState, useId} from 'react'
import TaskList from './components/TaskList'
import TaskForm from "./components/TaskForm.tsx";
import {Task} from "./components/types.ts";

function App() {
    //Use State Docs: https://react.dev/reference/react/useState
    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem("tasks")
        return storedTasks ? JSON.parse(storedTasks) : []
        }
    )

    //the useEffect hook is used for interacting with external systems: docs: https://react.dev/reference/react/useEffect
    //in this case when tasks state changes, this hook handles the change in local storage.
    useEffect(() =>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (text:string) =>{
        //Trying out react useId hook to generate a unique identifier. docs: https://react.dev/reference/react/useId
        //TODO:Why is the rule-of-hooks issue happening here?
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const id = useId()
        const newTask:Task = {id,text, completed:false}
        //setTasks is a React.Dispatch Type so it contains a prevState. Link: https://stackoverflow.com/questions/54807454/what-is-prevstate-in-reactjs
        //This allows us to append the new task to the existing list easily.
        setTasks((prevTasks)=> [...prevTasks, newTask])
    }

    const deleteTask = (taskId:string) => {
        setTasks((prevTasks)=>{
            //return list without passed in taskID
            return prevTasks.filter((prevTask)=> {
                return prevTask.id !== taskId
            })
        })
    }

    const toggleComplete = (taskID:string) =>{
        setTasks((prevTasks) => {
            return prevTasks.map((prevTask)=>{
               return prevTask.id === taskID ? {...prevTask, completed: !prevTask.completed} : prevTask
            })
        })
    }
  return (
    <>
      <div>
      <h1>Task Manager</h1>
      <TaskList tasks={[]}></TaskList>
      </div>
    </>
  )
}

export default App
