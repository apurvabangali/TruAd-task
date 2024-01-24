import React from 'react'
import Header from './Header.jsx'
import Leftbar from './Leftbar.jsx'
import Home from './Home.jsx'
import { useState } from 'react'
import './Header.css'

function Dashboard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  
    return (
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Leftbar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Home />
      </div>
    )
}

export default Dashboard
