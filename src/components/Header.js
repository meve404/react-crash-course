import PropTypes from 'prop-types'
import { Button } from './Button'

export const Header = ({ tittle, onAdd, showAdd }) => {
  return (
    <header className='header'>
        {/* <h1 style={headingStyle}>Task Tracker {tittle}</h1> */}
        <h1>{tittle}</h1>
        <Button color={showAdd ? '#F76D3D' : '#AFB934'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}></Button>
    </header>
  )
}

Header.defaultProps = { //To make a deafult variable
  tittle: 'Task Tracker'
}

Header.propTypes = {
  tittle: PropTypes.string.isRequired
}

// to do dinamic styling
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }