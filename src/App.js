import { Header } from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react"

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
                reminder: true
            },
        ]
    )

  return (
    <div className="container">
      {/* <h2>{x ? name : 'No'}</h2> x ? : == if x then ... */}
      {/* <Header tittle = 'hello'></Header> */}
      <Header></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
