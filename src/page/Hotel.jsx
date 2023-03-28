import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DataTableCommon from '../component/dashborad/DataTableCommon';
import {getOwnerPlace} from "../services/place/placeSlice"




const Hotel = () => {

    const {ownerPlace} = useSelector((state)=>state.place)
    const dispatch = useDispatch()
    console.log(ownerPlace)

    useEffect(()=>{
        dispatch(getOwnerPlace())
    },[dispatch])

    const columns = [
        {
            name: 'Img',
            selector: row => <img src={row.imgUrl} className={"w-[50px] h-[50px]"}/>,
        
        },
        {
            name:"Id",
            selector: row => row.id,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },


        {
            name:"Action",
            cell:(row)=><button className='bg-red-400 text-white py-1 px-2'>Delete</button>, 
        }
    ];



    const category =[

    ]




  return (
    <div className="dashboard w-full">
        <div>Hotel</div>
        {
            ownerPlace?.map((item,i)=>{
                return(
                <div key={i}>
                    <div className='flex items-center md:flex-row flex-col gap-5'>
                        <div className='w-[40px]'>
                            <h2 className='text-[30px] font-bold'>{i+1}</h2>
                        </div>
                        <div className='w-[200px]'>
                        <div className='w-[200px] h-[150px] border border-white rounded-2xl overflow-hidden'>
                            <img src={`http://localhost:5000/uploads/${item.photos[0]}`} alt="" className='w-[100%] h-[100%] object-cover'/>
                        </div>
                        </div>
                        <div className='flex-1 items-start'>
                            <h3 className='text-[18px] font-medium'>{item.title}</h3>
                            <h2 className='text-[18px] font-bold'>price: ${item.price}</h2>
                            <h3>Guests: {item.maxGuests}</h3>
                        </div>
                        <div className='flex items-start flex-1 flex-col gap-2'>
                            <button className='py-[8px] w-[200px] bg-orange-500 rounded-2xl'>Add Room</button>
                            <button className='py-[8px] w-[200px] bg-green-500 rounded-2xl'>View</button>
                            <button className='py-[8px] w-[200px] bg-red-500 rounded-2xl'>Delete Hotle</button>
                        </div>
                    </div>
                    <div>
                        <DataTableCommon columns={item.rooms} data={category}/>
                    </div>
                </div>
                )
            })
        }
    </div>
  ) 
}

export default Hotel