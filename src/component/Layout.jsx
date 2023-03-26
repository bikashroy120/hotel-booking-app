import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './Navber'


const Layout = () => {
  return (
    
    <div className=''>
      <div className="container_item px-4">
          <Navber/>
        </div>
        <Outlet/>
    </div>
  )
}

export default Layout