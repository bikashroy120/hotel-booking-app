import React, { useState } from 'react'
import img from "../assets/images/de.png"
import {GrEdit} from "react-icons/gr"


const OwnerPro = () => {
  const [firstName,setFirstName] = useState("")
  const [lastName,setlastName] = useState("")
  const [email,setemail] = useState("")
  const [phone,setphone] = useState("")
  const [city,setCity] = useState("")
  const [photo,setphoto] = useState("")
  const [addres,setaddres] = useState("")
  const [country,setcountry] = useState("")
  const [birthday,setbirthday] = useState('')
  const [gender,setgender] = useState("")


  return (
    <div className="dashboard">
        <div className=' max-w-[750px] m-auto'>
            <div className='flex items-center justify-center'>
              <div className='w-[150px] relative'>
                      <div className='border-2 border-white w-[150px]  h-[150px] rounded-full overflow-hidden'>
                      <img src={img} alt="" className='z-10'/><img src={img} alt="" className='z-10'/>
                      </div>
                      <label htmlFor="img" className=' absolute z-50 rounded-full flex items-center justify-center bottom-[10px] right-[10px] w-[30px] bg-green-500 text-white h-[30px] border-[2px] border-white'>
                          <input type="file" id='img' className=' hidden'/>
                          <GrEdit/>
                      </label>
              </div>
            </div>

            <div>
                <div className='mb-3'>
                    <label className='ml-3' htmlFor="">FirstName :</label>
                    <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='Enter First Name ...'/>
                </div>
                <div className='mb-3'>
                    <label className='ml-3' htmlFor="">LastName :</label>
                    <input type="text" value={lastName} onChange={(e)=>setlastName(e.target.value)} placeholder='Enter First Name ...'/>
                </div>
                <div className='mb-3'>
                    <label className='ml-3' htmlFor="">Email :</label>
                    <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter First Name ...'/>
                </div>
                <div className='mb-3'>
                    <label className='ml-3' htmlFor="">Phone :</label>
                    <input type="text" value={phone} onChange={(e)=>setphone(e.target.value)} placeholder='Enter First Name ...'/>
                </div>
                <div className='mb-3'>
                    <label className='ml-3' htmlFor="">Address :</label>
                    <input type="text" value={addres} onChange={(e)=>setaddres(e.target.value)} placeholder='Enter First Name ...'/>
                </div>
                <div className='mb-3'>
                    <label className='ml-3' htmlFor="">City :</label>
                    <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter First Name ...'/>
                </div>
                <div className='mb-3'>
                    <label className='ml-3' htmlFor="">Country :</label>
                    <input type="text" value={country} onChange={(e)=>setcountry(e.target.value)} placeholder='Enter First Name ...'/>
                </div>
                <div className='mb-3'>
                    <label className='ml-3' htmlFor="">Dath of Brith :</label>
                    <input type="date" className='w-[100%] py-2 px-3 rounded-2xl' value={phone} onChange={(e)=>setphone(e.target.value)} />
                </div>
                <div className='flex items-center justify-center py-5'>
                  <button className='py-3 px-10 rounded-2xl bg-orange-500 text-white text-[19px] font-bold'>Save</button>
                </div>
            </div>
        </div>
     </div>
  )
}

export default OwnerPro