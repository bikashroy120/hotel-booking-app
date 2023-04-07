import React from 'react'

const AbaleRoom = ({rooms}) => {

   
  return (
    <div>
        <h2 className="font-semibold text-2xl">Available Rooms:</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 items-center gap-3 mt-5'>
            {
                rooms?.map((item,i)=>{
                    console.log(item)
                    return(
                        <div key={i}>
                            <div className='w-full h-[130px] mb-3'>
                                <img className=' rounded-md w-full h-full' src={`http://localhost:5000/uploads/${item.photos[0]}`} alt="" />
                            </div>
                            <h2 className='text-[16px] font-bold'>{item.title}</h2>
                            <h3 className='text-[14px] font-medium'>Room Number:  {item.roomNumber}</h3>
                            <h3 className='text-[14px] font-medium'>Gast :{item.maxgest}</h3>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default AbaleRoom