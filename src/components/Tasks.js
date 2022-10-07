const tasks = [
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

const Tasks = () => {
  return (
    <div>
        {tasks.map((task) => (  //map() makes a list with the dictionaries made on task. The arrow function works as forloop with ()
            <h3 key={task.id}>{task.text}</h3>
        ))}
    </div>
  )
}

export default Tasks