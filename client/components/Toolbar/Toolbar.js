import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Navitems from './Navitems';
import {Link} from 'react-router-dom';

import './toolbar.scss';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div className="toolbar-toggle-btn">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="logo">
        <Link to="/">Gems</Link>
      </div>
      <div className="spacer" />
      <div className="nav-items">
        <Navitems />
      </div>
    </nav>
  </header>
);

export default toolbar;
