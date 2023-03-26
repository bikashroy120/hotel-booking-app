import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from './Navber'


const Layout = () => {
  return (
    <div className="container_item">
    <div className='px-5'>

        <Navber/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout