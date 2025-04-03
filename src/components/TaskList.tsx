interface TaskListProps {
    tasks?: any
}

const TaskList = ({tasks}:TaskListProps) => {
    return (
        <div className="task-list">
            {tasks.length == 0 ? <p>No tasks yet</p> : null}
        </div>
    )
}

export default TaskList