import { Header } from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"
import AddTask from "./components/AddTask"

function App() {
  const [tasks, setTasks] = useState ( // [name of state, function to Update] creates a state. useState is a hook (to get data)
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'Feb 5th at 2:30pm',
                reminder: true
            },
            {
                id: 2,
                text: 'Food Shopping',
                day: 'Feb 6th at 1:30pm',
                reminder: true
            },
            {
                id: 3,
                text: 'Meeting at school',
                day: 'Feb 7th at 1:30pm',
                reminder: false
            }
  ])

  // Add Task
  const addTask = (task) => {
    console.log(task);
  }

  // Delete Task/ state get passed down, functions get passed up
  const deleteTask = (id) => {
    setTasks(tasks.filter(
      (task) => task.id !== id
    ))
  }

  // Toggle reminder true/false
  const toggleReminder = (id) => {
    // ...task, reminder: !task.reminder to copy all the tasks and change the reminder
    setTasks(tasks.map(
      (task) => task.id === id ? { ...task, reminder: !task.reminder } : task
    ))
  }

  return (
    <div className="container">
      {/* <h2>{x ? name : 'No'}</h2> x ? : == if x then ... */}
      {/* <Header tittle = 'hello'></Header> */}
      <Header></Header>
      <AddTask onAdd={addTask} ></AddTask>
      {/* if tasks array has tasks -> show tasks else 'No tasks to show' */}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder} ></Tasks> : 'No tasks to show'}
    </div>
  );
}

export default App;
