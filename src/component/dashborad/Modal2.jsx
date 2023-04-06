import React from 'react'
import {IoIosClose} from "react-icons/io"
import {motion} from "framer-motion"
import { useDispatch,  } from 'react-redux'
import { deleteHotel, getOwnerPlace } from '../../services/place/placeSlice'


function Modal2({setHdShow,item}) {
  const dispatch = useDispatch()
  console.log(item)
  const deletedRoom = ()=>{
    dispatch(deleteHotel(item._id))
    dispatch(getOwnerPlace())
    setHdShow(false)
  }



  return (
    <div className=' fixed z-50 top-0 left-0 w-full flex items-center justify-center h-full bg-gray-500 bg-opacity-75'>
        <motion.div
          initial={{opacity:0,y:"20px"}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.5}}
        className='w-[500px] bg-white shadow-2xl h-[300px] p-4 rounded-2xl'>
          <div className='flex items-center justify-end'>
              <IoIosClose onClick={()=>setHdShow(false)} className='text-[45px] duration-300 text-black cursor-pointer hover:text-red-500'/>
          </div>
          <div className='w-full h-[60%] flex items-start justify-center flex-col'>
            {
                item.rooms.length!==0 ? ( <h2 className='text-[25px]'>Places Delete First Room and Try Aging</h2>):( <h2 className='text-[25px]'>Are Your Delete The Hotel</h2>)
            }
           
          </div>
          <div className='flex items-center justify-end gap-4'>
                <button onClick={()=>setHdShow(false)} className='py-2 px-5 rounded-md bg-red-500 text-white text-[19px] font-bold'>Close</button>
                {
                    item.rooms.length ===0 && <button onClick={()=>deletedRoom()} className='py-2 px-5 rounded-md bg-green-500 text-black text-[19px] font-bold'>
                    Delete
                    </button>
                }
            </div>
        </motion.div>
    </div>
  )
}

export default Modal2