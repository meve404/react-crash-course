import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
  return (
    <div className='task'>
        <h3>
            { task.text }
            <FaTimes style={{ color: '#CF4A3D', cursor: 'pointer' }}></FaTimes>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task