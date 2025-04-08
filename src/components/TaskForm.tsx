

const TaskForm = () =>{
    return(
        <form className="task-form">
            <input
                type="text"
                placeholder="Add a new task"
            
            />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default TaskForm