import PropTypes from 'prop-types'
import { Button } from './Button'

export const Header = ({tittle}) => {
  const onClick = () => {
    console.log('Click')
  }

  return (
    <header className='header'>
        {/* <h1 style={headingStyle}>Task Tracker {tittle}</h1> */}
        <h1>{tittle}</h1>
        <Button color='#AFB934' text='Add' onClick={onClick}></Button>
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