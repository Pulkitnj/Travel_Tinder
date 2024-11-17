import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from "@/service/firebaseConfig";
import { toast } from 'sonner';
import InfoSection from './InfoSection';
import HotelList from './HotelList';
import PlacesToVisit from './PlacesToVisit';

function ViewTrip() {
    const { tripId } = useParams();
    const navigate = useNavigate();
    const [trip, setTrip] = useState([]);

    useEffect(() => {
        // Check if the user is signed in
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (!user || !user.email) {
            navigate('/'); // Redirect to the login page if not signed in
        } else {
            // If signed in, fetch trip data
            tripId && getTripData();
        }
    }, [tripId, navigate]);

    const getTripData = async () => {
        const docRef = doc(db, 'Trips', tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document: ", docSnap.data());
            setTrip(docSnap.data());
        } else {
            console.log("No such document");
            toast("No such document");
        }
    }

    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
            {/* Info Section, Hotels, Places to Visit */}
            <InfoSection trip={trip} />
            <HotelList trip={trip} />
            <PlacesToVisit trip={trip} />
        </div>
    )
}

export default ViewTrip;