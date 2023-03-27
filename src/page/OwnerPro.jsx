import React, { useEffect, useState } from 'react'
import img from "../assets/images/de.png"
import {GrEdit} from "react-icons/gr"
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import { base_url } from "../utils/baseUrl";
import { updateProfileData } from '../services/auth/authSlice';
// import { getProfileData } from '../services/auth/authSlice';



const OwnerPro = () => {

    const {profileData}  = useSelector((state)=>state.auth)

  const [firstName,setFirstName] = useState("")
  const [lastName,setlastName] = useState("")
  const [email,setemail] = useState("")
  const [phone,setphone] = useState("")
  const [city,setCity] = useState("")
  const [photo,setphoto] = useState("")
  const [address,setaddress] = useState("")
  const [country,setcountry] = useState("")
  const [birthday,setbirthday] = useState("")

    const dispatch = useDispatch()


    // useEffect(()=>{
    //   dispatch(getProfileData())
    // },[dispatch,getProfileData])

    useEffect(()=>{
        setFirstName(profileData?.firstName)
        setlastName(profileData?.lastName)
        setemail(profileData?.email)
        setphone(profileData?.phone)
        setCity(profileData?.city)
        setphoto(profileData?.photo)
        setaddress(profileData?.address)
        setcountry(profileData?.country)
        setbirthday(profileData?.birthday)

        return()=>{
            setFirstName("")
            setlastName("")
            setemail("")
            setphone("")
            setCity("")
            setphoto("")
            setaddress("")
            setcountry("")
            setbirthday("") 
        }
    },[profileData])

    console.log(profileData)

    const updateProfile = ()=>{
        const data = {firstName,lastName,email,city,country,phone,photo,address,birthday}
        console.log(data)
        dispatch(updateProfileData(data))
    }


    const uploadImg = (ev)=>{
        const files = ev.target.files;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
          data.append('photos', files[i]);
        }
        axios.post(`${base_url}/upload/upload-multer`, data, {
          headers: {'Content-type':'multipart/form-data'}
        }).then(response => {
          const {data:filenames} = response;
          setphoto(filenames[0]);
        })
    }

    console.log(photo)

  return (
    <div className="dashboard">
        <div className=' max-w-[750px] m-auto'>
            <div className='flex items-center justify-center'>
              <div className='w-[150px] relative'>
                      <div className='border-2 border-white w-[150px]  h-[150px] rounded-full overflow-hidden'>
                      <img src={photo ? `http://localhost:5000/uploads/${photo}` : img} alt="" className='z-10'/><img src={img} alt="" className='z-10'/>
                      </div>
                      <label htmlFor="img" className=' absolute z-50 rounded-full flex items-center justify-center bottom-[10px] right-[10px] w-[30px] bg-green-500 text-white h-[30px] border-[2px] border-white'>
                          <input type="file" id='img' onChange={uploadImg} className=' hidden'/>
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
                    <input type="text" value={email} readOnly onChange={(e)=>setemail(e.target.value)} placeholder='Enter First Name ...'/>
                </div>
                <div className='mb-3'>
                    <label className='ml-3' htmlFor="">Phone :</label>
                    <input type="text" value={phone} onChange={(e)=>setphone(e.target.value)} placeholder='Enter First Name ...'/>
                </div>
                <div className='mb-3'>
                    <label className='ml-3' htmlFor="">Address :</label>
                    <input type="text" value={address} onChange={(e)=>setaddress(e.target.value)} placeholder='Enter First Name ...'/>
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
                    <input type="date" className='w-[100%] py-2 px-3 rounded-2xl' value={birthday?.slice(0,10)} onChange={(e)=>setbirthday(e.target.value)} />
                </div>
                <div className='flex items-center justify-center py-5'>
                  <button onClick={updateProfile} className='py-3 px-10 rounded-2xl bg-orange-500 text-white text-[19px] font-bold'>Save</button>
                </div>
            </div>
        </div>
     </div>
  )
}

export default OwnerPro