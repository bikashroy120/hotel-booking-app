import React, { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner';
import ReactQuill from "react-quill"; 
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PhotosUploader from '../component/PhotosUploader';
import { creactRoom, getOwnerPlace } from '../services/place/placeSlice';
import {BsBoxArrowLeft} from "react-icons/bs"

const AddRoom = () => {

    const dispatch =  useDispatch()
    const [title,setTitle] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [description,setDescription] = useState('');
    const [roomNumber,setRoomNumber] = useState()
    const [maxGuests,setMaxGuests] = useState()
    const {isLoading,isSuccess,creactroom} = useSelector((state)=>state.place)
    const params =  useParams()
    const navigate =  useNavigate()
    const {id} = params;
    function inputHeader(text) {
        return (
          <h2 className="text-2xl mt-4">{text}</h2>
        );
      }
      function inputDescription(text) {
        return (
          <p className=" text-[16px]">{text}</p>
        );
      }
      function preInput(header,description) {
        return (
          <>
            {inputHeader(header)}
            {inputDescription(description)}
          </>
        );
      }

      console.log(addedPhotos)

    async function savePlace(ev) {
        ev.preventDefault();
        const data = {
          title,description,photos:addedPhotos,roomNumber,maxgest:maxGuests
        }

        console.log(data)

        const ddd = {
          id:id,
          data:data
        }
        dispatch(creactRoom(ddd))
        dispatch(getOwnerPlace())
      }

      useEffect(()=>{
        if(isSuccess && creactroom){
          navigate("/owner/hotel")
        }
      },[isSuccess,creactroom])

  return (
    <div className='dashboard w-full'>
              <div>
        <button className="py-2 px-5 flex item-center gap-2 bg-orange-500 text-white  font-bold text-[20px] border-none outline-none rounded-md" onClick={()=>navigate(-1)}><BsBoxArrowLeft className="mt-1 font-bold"/> <span>Back</span></button>
      </div>
        <form onSubmit={savePlace}>
            <div className='mb-5'>
                {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
                <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example: My lovely apt"/>
            </div>
            <div>
            <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
            </div>
            <div className="h-[300px]">
            {preInput('Description','description of the place')}
                <ReactQuill
                    className="bg-white h-[250px] rounded-3xl border-none overflow-hidden pb-10 text-[18px]"
                    // theme="snow"
                    value={description}
                    onChange={setDescription}
                />  
            </div>
          <div className='flex items-center gap-3 mt-7'>
          <div className=' w-full'>
            <h3 className="">Max number of guests</h3>
            <input type="number" value={maxGuests} placeholder="enter number of guests"
                onChange={ev => setMaxGuests(ev.target.value)}/>
          </div>
          <div className='w-full'>
            <h3 className="">Room Number</h3>
            <input type="number" value={roomNumber} placeholder="enter room number"
                onChange={ev => setRoomNumber(ev.target.value)}/>
          </div>
          </div>
        <div className='flex items-center justify-center mt-4'>
        <button type="submit" className="py-3 px-10 bg-orange-500 rounded-2xl font-bold text-[20px]">{isLoading ? (
          <RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          width="40"
          visible={true}
        />
        ): ("Save")}</button>
        </div>
        </form>
    </div>
  )
}

export default AddRoom