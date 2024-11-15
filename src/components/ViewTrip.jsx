import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from "@/service/firebaseConfig";
import { toast } from 'sonner';
import InfoSection from './InfoSection';
import HotelList from './HotelList';
import PlacesToVisit from './PlacesToVisit';

function ViewTrip() {
    const {tripId} = useParams();
    const [trip, setTrip] = useState([]);
    useEffect(() => {
        tripId&&getTripData();
    },[tripId]);
 
    const getTripData = async () => {
        const docRef = doc(db, 'Trips' , "LA");
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Document: ",docSnap.data());
            setTrip(docSnap.data());
        }
        else{
            console.log("No such document");
            toast("No such document");
        }
    }
  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      <InfoSection trip={trip}/>
      <HotelList trip={trip}/>
      <PlacesToVisit trip={trip}/>
    </div>
  )
}

export default ViewTrip
