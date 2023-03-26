import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useParams } from 'react-router-dom'
import Myplace from './Myplace'
import PlacesFormPage from './PlacesFormPage'

const Profile = () => {

    const {user} =  useSelector((state)=>state.auth)
    let {subpage} =  useParams()
    if(subpage===undefined){
        subpage="profile" 
    }


    if(!user){
        return <Navigate to={"/login"}/>
    }


    function classAdd (type=null){
        let classs = 'py-3 px-6'

        if(type === subpage){
            classs += ' text-white rounded-full bg-primary'
        }

        return classs
    }

    const logOut = ()=>{
        localStorage.clear();
        window.location.reload(true)
    }



  return (
    <div>
         <nav className='flex items-center justify-center gap-3'>
            <Link className={classAdd("profile")} to={"/profile"}>My profile</Link>
            <Link className={classAdd("booking")} to={"/profile/booking"}>My booking</Link>
            <Link className={classAdd("places")} to={"/profile/places"}>My places</Link>
         </nav>

        {
          subpage === "profile" && (
            <div className='flex mt-10 items-center justify-center flex-col'>
                <h2 className=' font-bold'>Name : {user.username}</h2>
                <button onClick={logOut} className='px-10 py-2 bg-primary text-white rounded-full'>Log out</button>
            </div>
          )  
        }


        <div className='pb-8 max-w-[900px] m-auto'>
        {
          subpage === "places" && (
            <Myplace/>
          )
        }
        </div>

    </div>
  )
}

export default Profile