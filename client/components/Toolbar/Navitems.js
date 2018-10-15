import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../../store';

const navItems = ({handleClick, isLoggedIn}) => (
  <div>
    {isLoggedIn ? (
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </li>
      </ul>
    ) : (
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    )}
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(navItems);

/**
 * PROP TYPES
 */
navItems.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
