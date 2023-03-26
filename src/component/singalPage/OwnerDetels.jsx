import React from 'react'

const OwnerDetels = ({singalPlace}) => {
  return (
    <div className='flex items-center justify-between'>
        <div>
            <h2 className='text-[25px] font-medium'>Entire villa hosted by {singalPlace?.owner?.username}</h2>
            <div className='flex items-center gap-2'>
                <p>{singalPlace?.maxGuests} Guests</p>
                <p>{singalPlace &&  singalPlace?.rooms?.length} Rooms</p>
            </div>
        </div>
        <div>
            <div className='w-[60px] h-[60px] rounded-full overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://a0.muscache.com/im/pictures/user/6343369e-da21-4391-83e5-e457e9b71ded.jpg?im_w=240" alt="" />
            </div>
        </div>
    </div>
  )
}

export default OwnerDetels