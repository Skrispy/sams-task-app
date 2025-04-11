import TaskItem from "./TaskItem"
import { Task } from "./types"

interface TaskListProps {
    tasks: Task[]
    toggleComplete: (id:number) => void
    deleteTask: (id:number) => void
}

const TaskList: React.FC<TaskListProps> = ({tasks, toggleComplete, deleteTask}) => {
    return (
        <div className="task-list">
            {tasks.length === 0 ? <p>No tasks yet. Please add some</p> : null}
            {tasks.map((task)=> (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    )
}

export default TaskList