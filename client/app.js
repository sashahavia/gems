import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Toolbar from './components/Toolbar/Toolbar'

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Toolbar />
      <main styles={{marginTop: '64px'}}>
        <Routes />
      </main>
    </div>
  )
}

export default App
