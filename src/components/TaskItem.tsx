import { Task } from "./types"

interface TaskItemProps {
    task: Task
    toggleComplete: (id: string) => void
    deleteTask: (id: string) => void
}

const TaskItem = ({task, toggleComplete, deleteTask}:TaskItemProps) => {
    return(
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            <span onClick={()=>toggleComplete(task.id)}>
                {task.completed ? "💯" : "😱"} {task.text}
            </span>
            <button onClick={()=> deleteTask(task.id)}>␡</button>
        </div>
    )
}

export default TaskItem