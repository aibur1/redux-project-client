import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import booking from './Booking.css';

const Booking = () => {
    const {bookingId} = useParams();
    const [bookings, setBookings] = useState({});
    // const {user}=useAuth();
    const {user}=useFirebase();
    console.log(user);

    useEffect(()=>{
fetch(`http://localhost:5000/purchases/${bookingId}`)
.then(res => res.json())
.then(data => setBookings(data))
    }, [])


    const nameRef=useRef();
    const emailRef=useRef();
    const addressRef=useRef();
    const phoneRef=useRef();
    // const dateRef=useRef();
    const pruductRef=useRef();

    const formSubmit = e => {
        e.preventDefault();
        const name=nameRef.current.value;
         const email=emailRef.current.value;
         const address=addressRef.current.value;
         const Product=pruductRef.current.value;
         const phone=phoneRef.current.value;
        //  const date=dateRef.current.value;

        const loadData={name,email,address,Product,phone,img:bookings.img,status:'pending',price:bookings.price}

       fetch(`http://localhost:5000/purchases`,{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
          },

          body:JSON.stringify(loadData)
       })
       .then(res=>res.json())
       .then(data=>{
           if(data.insertedId){
               alert(`your order successfully accepted`)
               e.target.reset()
           }
       })

    }

    return (
        <div className='row container'>
            <div className='col-md-6'>
                <div>
                <img src={bookings?.img} alt="" /> 
                <h1>{bookings?.name}</h1>
                <h3>${bookings?.price}</h3>
                <h5>{bookings.desc}</h5>
                </div>
            </div>
            
            <div className='col-md-6'>
                 <div className='py-5'>
                      <h1>Confirm Booking now</h1>
                   <form onSubmit={formSubmit}>
                       <input type="name"  ref={nameRef} value={user?.displayName} placeholder='Name'/>
                                <input type="email" value={user?.email} ref={emailRef}placeholder='Email'/>
                                <input type="text"  ref={addressRef} placeholder='Address'/>
                                <input type="text" value={bookings?.title} ref={pruductRef} placeholder='Product Name'/>
                                <input type="number"ref={phoneRef} placeholder='Phone'/> <br/>
                                {/* <input type="date"  ref={dateRef} placeholder='Date'/> */}
                       <input type="submit" value="Place order" />
            
                  </form>
               </div>
            </div>
        </div>
    );
};

export default Booking;