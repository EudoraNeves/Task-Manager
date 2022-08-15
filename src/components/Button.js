import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ bgColor, color, text, onClick }) => {
  return (
    <button className='btn' style={{backgroundColor: bgColor, color: color}} onClick={onClick}>{text}</button>
  )
}

Button.defaultProps = {
    bgColor: 'steelblue',
    color: 'white',
    text: 'Submit',
}

Button.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button