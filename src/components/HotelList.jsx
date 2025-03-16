import React, { useState, useEffect } from "react";
import axios from "axios";

function HotelList({ trip }) {
  const [hotelImages, setHotelImages] = useState({}); // To store fetched hotel images

  useEffect(() => {
    if (trip?.tripData?.hotels) {
      fetchHotelImages();
    }
  }, [trip?.tripData?.hotels]);

  const fetchHotelImages = async () => {
    const hotels = trip?.tripData?.hotels || [];
    const newHotelImages = {};

    for (let i = 0; i < hotels.length; i++) {
      const hotel = hotels[i];
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: { query: `${hotel.HotelName} hotel` },
            headers: {
              Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
            },
          }
        );

        // Use the index of the hotel to fetch a different image from the results array
        const photoUrl = response?.data?.results[i % response.data.results.length]?.urls?.regular;

        newHotelImages[hotel.HotelId] = photoUrl || "/placeholder.jpg"; // Fallback to placeholder
      } catch (error) {
        console.error(`Error fetching image for ${hotel.HotelName}:`, error);
        newHotelImages[hotel.HotelId] = "/placeholder.jpg"; // Fallback to placeholder
      }
    }

    setHotelImages(newHotelImages);
  };

  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.hotels?.map((hotel) => (
          <a
            key={hotel.HotelId}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              hotel.HotelName + ", " + hotel.HotelAddress
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-white shadow-md rounded-xl p-1 flex flex-col hover:scale-105 transition-all cursor-pointer">
              <img
                src={hotelImages[hotel.HotelId] || "/placeholder.jpg"}
                alt={hotel.HotelName}
                className="rounded-xl w-full h-40 object-cover"
              />
              <div className="flex flex-col gap-1 my-2">
                <h2 className="font-medium">{hotel.HotelName}</h2>
                <h2 className="text-xs text-gray-500">📍 {hotel?.HotelAddress}</h2>
                <h2 className="text-sm text-gray-500">⭐ {hotel?.rating} star</h2>
                <h2 className="text-sm text-gray-500">💰 {hotel?.Price}</h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default HotelList;