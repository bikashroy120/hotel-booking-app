import React, { useCallback, useEffect } from 'react'
import {GrChapterAdd} from "react-icons/gr"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getOwnerPlace } from '../services/place/placeSlice'

const Myplace = () => {
    const navigate =  useNavigate()
    const dispatch =  useDispatch()
    const {ownerPlace} = useSelector((state)=>state.place)
    const Navegeted = ()=>{
        navigate("/profile/creact")
    }


  const getData = useCallback(()=>{
    dispatch(getOwnerPlace())
  },[getOwnerPlace])
  
  useEffect(()=>{
    getData()
  },[getData])

  console.log(ownerPlace)

  return (
    <div className='mt-8'>
        <div className='flex items-center justify-center'>
            <button onClick={Navegeted} className='primary max-w-[200px] flex items-center justify-center gap-2'><GrChapterAdd className=' text-white'/> Add Plece</button>
        </div>

        <div className='flex flex-col gap-2'>
          {ownerPlace && ownerPlace.map((item,i)=>{
            return(
              <div className=' bg-gray-400 flex items-start'>
                <div className=' w-[200px] h-[200px] grow shrink-0'>
                    <img src={``} alt="" />
                </div>
                <div className=' grow-0 shrink'>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Myplace