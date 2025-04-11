import {useState} from "react";

interface TaskFormProps{
    addTask: (taskText:string) => void
}

const TaskForm: React.FC<TaskFormProps> = ({addTask}) =>{
    const [task, setTask]= useState<string>("")

    const handleSubmit =  (event: React.FormEvent) =>{
        //FormEvent preventDefault, prevents page refresh: https://www.robinwieruch.de/react-preventdefault/
        event.preventDefault()
        if(!task.trim()) return
        addTask(task)
        setTask("")
    }

    return(
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Add a new task"
                value={task}
                onChange={(event)=> setTask(event.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm