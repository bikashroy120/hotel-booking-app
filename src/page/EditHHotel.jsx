import PhotosUploader from "../component/PhotosUploader";
import Perks from "../component/Perks";
import {useEffect, useState} from "react";
import { useNavigate, useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePlace } from "../services/place/placeSlice";
import { toast } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { base_url } from "../utils/baseUrl";
import {BsBoxArrowLeft} from "react-icons/bs"

export default function EditHHotel() {
  const dispatch =  useDispatch()
  const navigate = useNavigate();
  const [title,setTitle] = useState('');
  const [address,setAddress] = useState('');
  const [addedPhotos,setAddedPhotos] = useState([]);
  const [description,setDescription] = useState('');
  const [perks,setPerks] = useState([]);
  const [extraInfo,setExtraInfo] = useState('');
  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [maxGuests,setMaxGuests] = useState(1);
  const [price,setPrice] = useState(100);
  const [city,setCity] = useState('')
  const [lodding,setLoadding] = useState(false)
  const {isError,isLoading,isSuccess,creactplace} = useSelector((state)=>state.place)
  const params =  useParams()
    const {id}=params;

  useEffect(() => {
    if (!id) {
      return;
    }
    setLoadding(true)
    axios.get(`${base_url}/place/${id}`).then(response => {
       const {data} = response;
       setTitle(data.data.title);
       setAddress(data.data.address);
       setAddedPhotos(data.data.photos);
       setDescription(data.data.description);
       setPerks(data.data.perks);
       setExtraInfo(data.data.extraInfo);
       setCheckIn(data.data.checkIn);
       setCheckOut(data.data.checkOut);
       setMaxGuests(data.data.maxGuests);
       setPrice(data.data.price);
       setCity(data.data.city)
       setLoadding(false)
    });
  }, [id]);
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

  async function savePlace(ev) {
    ev.preventDefault();

    const data ={
      title,address,photos:addedPhotos,description,perks,extraInfo,checkIn,checkOut,maxGuests,city,price
    }

    const obb = {
      id:id,
      data:data
    }

    dispatch(updatePlace(obb))
  }


  useEffect(()=>{
    if(isSuccess && creactplace){
      // navigate("/profile/places")
    }

    if(!isSuccess && isError){
      toast.error("shomthing is wrong")
    }

  },[isSuccess,creactplace,isError,navigate])

  if(lodding){
    return(
      <div className="dashboard w-full flex items-center justify-center h-[500px]">
          <RotatingLines
          strokeColor="red"
          strokeWidth="5"
          animationDuration="0.75"
          width="80"
          visible={true}
        />
      </div>
    )
  }


  return (
    <div className="dashboard w-full">
      <div>
        <button className="py-2 px-5 flex item-center gap-2 bg-orange-500 text-white  font-bold text-[20px] border-none outline-none rounded-md" onClick={()=>navigate(-1)}><BsBoxArrowLeft className="mt-1 font-bold"/> <span>Back</span></button>
      </div>
      {/* <AccountNav /> */}
      <form onSubmit={savePlace}>
        {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example: My lovely apt"/>
          <div className="flex items-center gap-5">
            <div className="w-full">
              {preInput('Address', 'Address to this place')}
              <input type="text" value={address} onChange={ev => setAddress(ev.target.value)}placeholder="address"/>
            </div>
            <div className="w-full">
                {preInput('City', 'City to this place')}
                 <input type="text" value={city} onChange={ev => setCity(ev.target.value)}placeholder="address"/>
            </div>
          </div>
        {preInput('Photos','more = better')}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
      <div className="h-[300px]">
      {preInput('Description','description of the place')}
        <ReactQuill
            className="bg-white h-[250px] rounded-3xl border-none overflow-hidden pb-10 text-[18px]"
            // theme="snow"
            value={description}
            onChange={setDescription}
          />  
      </div>
        {preInput('Perks','select all the perks of your place')}
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <Perks selected={perks} onChange={setPerks} />
        </div>
        {preInput('Extra info','house rules, etc')}
        <ReactQuill
            className="bg-white h-[200px] overflow-hidden pb-10 text-[18px] rounded-3xl border-none"
            // theme="snow"
            value={extraInfo}
            onChange={setExtraInfo}
          />  
        {preInput('Check in&out times','add check in and out times, remember to have some time window for cleaning the room between guests')}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1">Check in time</h3>
            <input type="text"
                   value={checkIn}
                   onChange={ev => setCheckIn(ev.target.value)}
                   placeholder="14"/>
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check out time</h3>
            <input type="text"
                   value={checkOut}
                   onChange={ev => setCheckOut(ev.target.value)}
                   placeholder="11" />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max number of guests</h3>
            <input type="number" value={maxGuests}
                   onChange={ev => setMaxGuests(ev.target.value)}/>
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Price per night</h3>
            <input type="number" value={price}
                   onChange={ev => setPrice(ev.target.value)}/>
          </div>
        </div>
        <div className="my-5">
        <button type="submit" className="primary my-6">{isLoading ? (
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
  );
}