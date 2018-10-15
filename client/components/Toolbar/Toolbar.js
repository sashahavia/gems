import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Navitems from './Navitems';

import './toolbar.scss';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-btn">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="logo">
        <a href="/">Gems</a>
      </div>
      <div className="spacer" />
      <div className="nav-items">
        <Navitems />
      </div>
    </nav>
  </header>
);

export default toolbar;

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   };
// };

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout());
//     }
//   };
// };

// export default connect(mapState, mapDispatch)(toolbar);

// /**
//  * PROP TYPES
//  */
// toolbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// };
