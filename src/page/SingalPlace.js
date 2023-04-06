import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AddressLink from '../component/singalPage/AddressLink'
import BookingWidget from '../component/singalPage/BookingWidget'
import GetPerks from '../component/singalPage/GetPerks'
import OwnerDetels from '../component/singalPage/OwnerDetels'
import PlaceGallery from '../component/singalPage/PlaceGallery'
import { getSingalPlace } from '../services/place/placeSlice'
import {AiFillStar} from "react-icons/ai"
import AbaleRoom from '../component/singalPage/AbaleRoom'

const SingalPlace = () => {

    const dispatch =  useDispatch()
    const {singalPlace,isLoading} = useSelector((state)=>state.place)
    const params =useParams() 
    

    useEffect(()=>{
      dispatch(getSingalPlace(params.id))
    },[])
  

    if(singalPlace === undefined){
        return(
            <h1>Lodding</h1>
        )
    }


  return (
    <div className="mt-4  px-8 pt-8">
    <h1 className="text-3xl font-medium">{singalPlace?.title}</h1>
    <div className='flex items-center gap-5'>
        <div className='flex items-center gap-1 text-[19px]'>
            <AiFillStar/>
            <h5>4.93 · 366 reviews</h5>
        </div>

        <AddressLink>{singalPlace?.address}</AddressLink>
    </div>
    <PlaceGallery place={singalPlace && singalPlace} />
    <div className="mt-8 mb-8 grid gap-14 grid-cols-1 md:grid-cols-[2fr_1fr]">
      <div>

        <div>
            <OwnerDetels singalPlace={singalPlace && singalPlace}/>
        </div>
        <div className='w-[100%] h-[1px] my-7 bg-gray-400'></div>
        <div>
          <AbaleRoom rooms={singalPlace.rooms}/>
        </div>
        <div className='w-[100%] h-[1px] my-7 bg-gray-400'></div>
        <div className="my-4">
          <h2 className="font-semibold text-2xl">Description</h2>
          <div
              className=' [$>h2]:text-[35px] [$>h3]:text-[30px] [$>h4]:text-[20px]'
              dangerouslySetInnerHTML={{__html: singalPlace?.description}}
            />
        </div>
        <div className='w-[100%] h-[1px] my-7 bg-gray-400'></div>
        <div className=''>
            <h2 className="text-[25px] font-semibold">What this place offers</h2>
            <GetPerks singalPlace={singalPlace  &&  singalPlace}/>
        </div>

      </div>
      <div>
        <BookingWidget place={singalPlace && singalPlace} />
      </div>
    </div>
    <div className="bg-white -mx-8 px-8 py-8 border-t">
      <div>
        <h2 className="font-semibold text-2xl">Extra info</h2>
      </div>
      <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
        
      <div
      dangerouslySetInnerHTML={{__html: singalPlace.extraInfo}}
    />
    </div>
    </div>
  </div>
  )
}

export default SingalPlace