import Task from "./Task"

const Tasks = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task) => (  //map() makes a list with the dictionaries made on task. The arrow function works as forloop with .map()
                <Task key={task.id} task={task}></Task>
            ))}
        </div>
    )
}

export default Tasks