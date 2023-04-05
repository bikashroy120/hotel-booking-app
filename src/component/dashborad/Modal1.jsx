import React, { useEffect } from 'react'
import {IoIosClose} from "react-icons/io"
import {motion} from "framer-motion"
import { useDispatch, useSelector } from 'react-redux'
import { deleteRoom, getOwnerPlace } from '../../services/place/placeSlice'
import { RotatingLines } from 'react-loader-spinner'

function Modal1({setShow,id}) {
  const dispatch = useDispatch()
  console.log(id)
  const {isLoading} = useSelector((state)=>state.place)

  const deletedRoom = ()=>{
    dispatch(deleteRoom(id))
    dispatch(getOwnerPlace())
    setShow(false)
  }



  return (
    <div className=' fixed z-50 top-0 left-0 w-full flex items-center justify-center h-full bg-gray-500 bg-opacity-75'>
        <motion.div
          initial={{opacity:0,y:"20px"}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.5}}
        className='w-[500px] bg-white shadow-2xl h-[300px] p-4 rounded-2xl'>
          <div className='flex items-center justify-end'>
              <IoIosClose onClick={()=>setShow(false)} className='text-[45px] duration-300 text-black cursor-pointer hover:text-red-500'/>
          </div>
          <div className='w-full h-[60%] flex items-start justify-center flex-col'>
            <h2 className='text-[25px]'>Are Your Delete The Room</h2>
          </div>
          <div className='flex items-center justify-end gap-4'>
                <button onClick={()=>setShow(false)} className='py-2 px-5 rounded-md bg-red-500 text-white text-[19px] font-bold'>Close</button>
                <button onClick={()=>deletedRoom()} className='py-2 px-5 rounded-md bg-green-500 text-black text-[19px] font-bold'>
                Delete
                </button>
            </div>
        </motion.div>
    </div>
  )
}

export default Modal1