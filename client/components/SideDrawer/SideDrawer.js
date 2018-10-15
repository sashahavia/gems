import React from 'react';
import Navitems from '../Toolbar/Navitems';

import './SideDrawer.scss';

const sideDrawer = props => {
  let drawerClasses = ['side-drawer'];
  if (props.show) {
    drawerClasses = ['side-drawer', 'open'];
  }
  return (
    <nav className={drawerClasses.join(' ')}>
      <Navitems />
    </nav>
  );
};

export default sideDrawer;
