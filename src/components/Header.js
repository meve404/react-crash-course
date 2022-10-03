import PropTypes from 'prop-types'

export const Header = ({tittle}) => {
  return (
    <header className='header'>
        {/* <h1 style={headingStyle}>Task Tracker {tittle}</h1> */}
        <h1>{tittle}</h1>
        <button className='btn'>Add</button>
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