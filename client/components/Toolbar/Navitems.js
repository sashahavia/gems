import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../../store';

const navItems = ({handleClick, isLoggedIn}) => {
  let navitem1, navitem2;
  if (isLoggedIn) {
    navitem1 = <Link to="/home">My Account</Link>;
    navitem2 = (
      <a href="#" onClick={handleClick}>
        Logout
      </a>
    );
  } else {
    navitem1 = <Link to="/login">Login</Link>;
    navitem2 = <Link to="/signup">Sign Up</Link>;
  }
  return (
    <div>
      <ul>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>{navitem1}</li>
        <li>{navitem2}</li>
      </ul>
    </div>
  );
};

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
