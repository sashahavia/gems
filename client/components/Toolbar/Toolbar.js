import React from 'react'
import {Link} from 'react-router-dom'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar-navigation">
      <div />
      <div className="logo">
        <a href="/">Gems</a>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar
