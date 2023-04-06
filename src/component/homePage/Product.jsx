import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({item}) => {


  return (
    <div >
        <div className='w-[100%] h-[300px] rounded-2xl shadow-lg overflow-hidden'>
           <Link to={`/place/${item._id}`}>
            <img src={`http://localhost:5000/uploads/${item.photos[0]}`} alt="" className='w-full h-full object-cover' />
           </Link>
        </div>
        <div className='pt-3'>
            <h2 className='text-[17px] font-medium'>{item.title}</h2>
            <p className='text-[14px] font-normal pt-2'>{item.address} <span className=' font-bold'>{item.city}</span></p>
            <h4 className='text-[19px] font-normal'><span className=' font-bold'>${item.price}</span> Night</h4>
        </div>
    </div>
  )
}

export default Product