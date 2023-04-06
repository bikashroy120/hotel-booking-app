import React from 'react'

const AbaleRoom = ({rooms}) => {

    console.log(rooms)
  return (
    <div>
        <h2 className="font-semibold text-2xl">Available Rooms</h2>
        <div className='grid grid-cols-2 items-center gap-3'>
            {
                rooms?.map((item,i)=>{
                    return(
                        <div key={i}>
                            <img src={`'http://localhost:5000/uploads/${item.photos[0]}`} alt="" />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default AbaleRoom