import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar';
import { Navigate, Outlet } from 'react-router-dom'
import TopNav from './TopNav/TopNav';
import { useSelector } from 'react-redux';

const LayoutOwner = () => {
    const [open, setOpen] = useState(true);
    const {user} =  useSelector((state)=>state.auth)
    if(!user && user?.rolId !== "owner"){
      return <Navigate to={"/"}/>
  }
  return (
    <div className="layout">
    <Sidebar setOpen={setOpen} open={open}/>
    <div className={open ? "main__layout duration-500" :"main__layout2 duration-500"}>
      <TopNav open={open}/>

      <div className="w-[100%] px-4">
        <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default LayoutOwner