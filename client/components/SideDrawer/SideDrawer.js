import React from 'react'
import {Link} from 'react-router-dom'

import './SideDrawer.scss'

const sideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </nav>
)

export default sideDrawer
