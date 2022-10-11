import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            {tasks.map((task) => (  //map() makes a list with the dictionaries made on task. The arrow function works as forloop with .map()
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} ></Task>
            ))}
        </div>
    )
}

export default Tasks