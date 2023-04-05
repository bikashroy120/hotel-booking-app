import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DataTableCommon from '../component/dashborad/DataTableCommon';
import Modal1 from '../component/dashborad/Modal1';
import {getOwnerPlace} from "../services/place/placeSlice"




const Hotel = () => {

    const {ownerPlace} = useSelector((state)=>state.place)
    const dispatch = useDispatch()
    const navigate =  useNavigate()
    const [show,setShow]=useState(false)
    const [id,setID] = useState(null)
    console.log(ownerPlace)

    useEffect(()=>{
        dispatch(getOwnerPlace())
    },[dispatch])

    const deletes = (id)=>{
        setShow(true)
        setID(id)
    }

    const columns = [
        {
            name: 'Img',
            selector: row => <img src={`http://localhost:5000/uploads/${row.photos[0]}`} className={"w-[50px] h-[50px]"}/>,
        
        },
        {
            name:"Room Number",
            selector: row => row.roomNumber,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },


        {
            name:"Action",
            cell:(row)=> <div className='flex items-center gap-2'><button onClick={()=>navigate(`/owner/edit/room/${row._id}`)} className='bg-green-400 text-black rounded-md py-1 px-2 shadow-xl'>Edit</button>
            <button onClick={()=>deletes(row._id)} className='bg-red-400 text-black rounded-md shadow-xl py-1 px-2'>Delete</button></div>, 
        }
    ];


  return (
    <div className="dashboard w-full relative">
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
                            <button onClick={()=>navigate(`/owner/add/place/${item._id}`)} className='py-[8px] w-[200px] bg-orange-500 rounded-2xl'>Add Room</button>
                            <button className='py-[8px] w-[200px] bg-green-500 rounded-2xl'>View</button>
                            <button className='py-[8px] w-[200px] bg-red-500 rounded-2xl'>Delete Hotle</button>
                        </div>
                    </div>
                    <div className='bg-black bg-opacity-70 p-5 rounded-3xl my-5'>
                        <h2 className=' text-white text-[25px] font-bold'>Rooms :</h2>
                        <DataTableCommon columns={columns} data={item.rooms}/>
                    </div>
                </div>
                )
            })
        }
        
        {
            show &&  <Modal1 id={id} setShow={setShow}/>
        }

    </div>
  ) 
}

export default Hotel