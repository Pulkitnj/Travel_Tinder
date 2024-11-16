import { Collection } from 'mongoose';
import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import UserTripCard from './UserTripCard';

function MyTrips() {
    const navigate = useNavigate();
    const [userTrips, setUserTrips] = useState([]);
    useEffect(()=>{
        GetUserTrips();
    },[]);

    // Get all trips of a user from firestore
    const GetUserTrips = async() => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if(!user){
            navigate('/');
            return;
        }

        const q = query(collection(db, 'Trips'), where('userEmail','==',user?.email))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setUserTrips(prevTrip=>[...prevTrip,doc.data()]);
        });
    }

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-4xl'>
        My Trips
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
        {userTrips?.map((trip,index)=>(
            <UserTripCard key={index} trip={trip} className=''/>
        ))}
      </div>
    </div>
  )
}

export default MyTrips
