import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import UserTripCard from './UserTripCard';

function MyTrips() {
  const navigate = useNavigate();
  const [userTrips, setUserTrips] = useState([]);

  useEffect(() => {
    GetUserTrips();
  }, []);

  // Get all trips of a user from Firestore
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    // If user is not signed in, redirect to login page
    if (!user || !user.email) {
      navigate('/');
      return;
    }

    // Fetch user trips from Firestore
    const q = query(collection(db, 'Trips'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);

    const trips = [];
    querySnapshot.forEach((doc) => {
      trips.push({ id: doc.id, ...doc.data() });
    });

    // Update the state with fetched trips
    setUserTrips(trips);
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 mb-10 text-center">
      <h2 className="font-bold text-4xl sm:text-5xl">
        My Trips
      </h2>

      {/* Display user trips */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
        {userTrips?.map((trip, index) => (
          <UserTripCard 
            key={index} 
            trip={trip} 
            onClick={() => navigate(`/view-trip/${trip.id}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default MyTrips;