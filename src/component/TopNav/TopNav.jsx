import React from "react";
import { AiOutlineSend } from "react-icons/ai";

import { Link } from "react-router-dom";
import profileImg from "../../assets/images/profile-02.png";
import "./top-nav.css";

const TopNav = ({open}) => {

  const logOut = ()=>{
    localStorage.clear();
    window.location.reload(true)
}


  return (
    <div className={open ? "top__nav duration-500" : "top__nav2 duration-500"}>
      <div className="flex items-center justify-between w-full px-5">
       <Link to={"/"} className='flex items-center text-white text-[30px] font-bold'>
            <AiOutlineSend className=' mt-2'/>
            <h2>airbnb</h2>
        </Link>
        <div className="flex items-center gap-2">
          <div className="profile">
           <img src={profileImg} alt="" />
          </div>

          <button onClick={logOut} className="h-[40px] flex items-center rounded-lg px-4 text-[18px] font-semibold bg-orange-600 text-white">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
