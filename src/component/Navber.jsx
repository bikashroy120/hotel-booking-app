import React from 'react'
import {AiOutlineSend} from "react-icons/ai"
import{FiSearch} from "react-icons/fi"
import {BsList} from "react-icons/bs"
import {FiUser} from "react-icons/fi"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navber = () => {

    const {user} =  useSelector((state)=>state.auth)

    console.log(user)

  return (
    <div className='flex items-center w-full  h-[80px] shadow-lg'>
        <div className="container_item w-full">
            <div className='flex items-center justify-between w-full'>
            <Link to={"/"} className='flex items-center text-[30px] font-bold'>
            <AiOutlineSend className=' mt-2'/>
            <h2>airbnb</h2>
        </Link>

        <div className='md:flex hidden items-center gap-2 shadow-md shadow-gray-400 font-medium py-3 px-4 rounded-2xl'>
            <div>Anywhere</div>
            <div className=' border h-[15px] border-gray-500'></div>
            <div>Any week</div>
            <div className=' border h-[15px] border-gray-500'></div>
            <div className='flex items-center gap-1 font-medium'>
                <h3>add guests</h3>
                <div className=' bg-orange-500 w-[20px] h-[20px] rounded-full text-white flex items-center justify-center'>
                    <FiSearch/>
                </div>
            </div>
        </div>

        <Link to={user? user.rolId==="owner" ? "/owner" : "/Profile" : "/login"} className='flex items-center gap-1 border border-gray-500 shadow-md font-medium py-2 px-3 rounded-2xl'>
            <BsList/>
            <div className=' bg-gray-500 text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'>
                <FiUser/>
                
            </div>
            {user ? <h4>{user.username}</h4> : ""}
        </Link>
            </div>
        </div>
    </div>
  )
}

export default Navber