import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "@/service/firebaseConfig";
import { toast } from "sonner";
import InfoSection from "./InfoSection";
import HotelList from "./HotelList";
import PlacesToVisit from "./PlacesToVisit";
import { Button } from "./ui/button";
import Payment from "../pages/Payment";

function ViewTrip() {
  const { tripId } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user || !user.email) {
      navigate("/"); // Redirect to login if not signed in
    } else {
      tripId && getTripData();
    }
  }, [tripId, navigate]);

  const getTripData = async () => {
    const docRef = doc(db, "Trips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setTrip(docSnap.data());
    } else {
      toast("No such document");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      <InfoSection trip={trip} />
      <HotelList trip={trip} />
      <PlacesToVisit trip={trip} />
      <Payment/>
    </div>
  );
}

export default ViewTrip;
