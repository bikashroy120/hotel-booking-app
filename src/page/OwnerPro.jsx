import React from 'react'
import img from "../assets/images/de.png"
import {GrEdit} from "react-icons/gr"


const OwnerPro = () => {

  return (
    <div className="dashboard">
        <div>
            <div className='w-[150px] relative'>
                    <div className='border-2 border-white w-[150px]  h-[150px] rounded-full overflow-hidden'>
                    <img src={img} alt="" className='z-10'/><img src={img} alt="" className='z-10'/>
                    </div>
                    <label htmlFor="img" className=' absolute z-50 rounded-full flex items-center justify-center bottom-[10px] right-[10px] w-[30px] bg-green-500 text-white h-[30px] border-[2px] border-white'>
                        <input type="files" id='img' className=' hidden'/>
                        <GrEdit/>
                    </label>
            </div>

            <div className='mb-3'>
               <label className='ml-3' htmlFor="">FirstName :</label>
               <input type="text" placeholder='Enter First Name ...'/>
            </div>
        </div>
     </div>
  )
}

export default OwnerPro