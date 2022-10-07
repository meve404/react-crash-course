import PropTypes from 'prop-types'

export const Button = ({color, text, onClick}) => {
  // onClick event, if the button is clicked. By passing a variable on = (var) => and using console.log(var)
  // the click object can be seen in the console
  // const onClick = (e) => {
  //   console.log(e)
  // }

  return <button onClick={onClick} className='btn' style={{backgroundColor: color}}> 
          {text}
         </button>
}

Button.defaultProps = { //To make a deafult variable
  color: '#3DCACF'
}

Button.propTypes = { //it's to make the code more professional and robust
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}