import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';
const Header = ({ title, onAdd, showAddBtn }) => {
  const location = useLocation();
  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname==='/' && <Button text={showAddBtn?'Close': 'Add'} onClick={onAdd} bgColor={showAddBtn? 'red': 'steelblue'} />}        
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Manager',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/*CSS in JS
const headerStyle = {
    color: 'red';
    backgroundColor: 'black';
}
*/

export default Header