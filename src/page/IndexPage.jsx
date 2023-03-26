import React, { useEffect } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import HeroArea from '../component/homePage/HeroArea'
import Product from '../component/homePage/Product'
import { getPlace } from '../services/place/placeSlice'

const IndexPage = () => {
  const dispatch =  useDispatch()
  const {place,isLoading} = useSelector((state)=>state.place)

  useEffect(()=>{
    dispatch(getPlace())
  },[])

  console.log(place)
  return (
    <div className='w-full'>
        {/* <HeroArea/> */}

    {
      isLoading ? (
        <RotatingLines
        strokeColor="white"
        strokeWidth="5"
        animationDuration="0.75"
        width="80"
        visible={true}
      />

      ) : (
          <div className='grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 items-start'>
              {
                place && place.map((item,index)=>{
                  return(
                      <Product item={item} key={index}/>
                  )
                })
              }

          </div>
      )
    }
    </div>
  )
}

export default IndexPage