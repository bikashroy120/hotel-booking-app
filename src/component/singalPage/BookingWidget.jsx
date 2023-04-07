import {useContext, useEffect, useState} from "react";
import {differenceInCalendarDays} from "date-fns";
import axios from "axios";
import {Navigate} from "react-router-dom";
// import {UserContext} from "./UserContext.jsx";

export default function BookingWidget({place}) {
  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [numberOfGuests,setNumberOfGuests] = useState(1);
  const [itemNumber,setItemNumber] = useState([])
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [redirect,setRedirect] = useState('');
//   const {user} = useContext(UserContext);

//   useEffect(() => {
//     if (user) {
//       setName(user.name);
//     }
//   }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  }

//   async function bookThisPlace() {
//     const response = await axios.post('/bookings', {
//       checkIn,checkOut,numberOfGuests,name,phone,
//       place:place._id,
//       price:numberOfNights * place.price,
//     });
//     const bookingId = response.data._id;
//     setRedirect(`/account/bookings/${bookingId}`);
//   }

//   if (redirect) {
//     return <Navigate to={redirect} />
//   }


console.log(itemNumber)

  return (
    <div className=" bg-slate-400 shadow-xl p-4 rounded-2xl sticky top-[20px]">
      <div className="text-2xl text-center">
        Price: ${place.price} / per night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Check in:</label>
            <input type="date" className=" bg-transparent"
                   value={checkIn}
                   onChange={ev => setCheckIn(ev.target.value)}/>
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check out:</label>
            <input type="date" value={checkOut} className=" bg-transparent"
                   onChange={ev => setCheckOut(ev.target.value)}/>
          </div>
        </div>
        {/* <div className="py-3 px-4 border-t">
          <label>Number of guests:</label>
          <input type="number"
                 value={numberOfGuests}
                 onChange={ev => setNumberOfGuests(ev.target.value)}/>
        </div> */}
        {numberOfNights > 0 && (
          <div >

            <div className="py-3 px-4 border-t">
              <h2>select room :</h2>
            <div className="grid grid-cols-3 justify-between">
                {
                  place.rooms.map((item,i)=>{
                    return(
                      <div key={i}>
                        <label className=" flex gap-2 items-center cursor-pointer">
                          <input type="checkbox"  name={item._id} value={item.Id} onChange={(e)=>setItemNumber(e.target.value)}/>
                          <span>{item.roomNumber}</span>
                        </label>
                      </div>
                    )
                  })
                }
            </div>
            </div>


            <div className="py-3 px-4 border-t">
            <label>Your full name:</label>
            <input type="text"
                   value={name}
                   onChange={ev => setName(ev.target.value)}/>
          </div>
          </div>
        )}
      </div>
      <button className="primary mt-4">
        Book this place
        {numberOfNights > 0 && (
          <span> ${numberOfNights * place.price}</span>
        )}
      </button>
    </div>
  );
}