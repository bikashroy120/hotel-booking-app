import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './Navber'


const Layout = () => {
  return (
    
    <div className=''>
          <Navber/>
        <Outlet/>
    </div>
  )
}

export default Layout