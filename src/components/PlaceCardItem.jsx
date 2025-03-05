import React, { useState, useEffect } from "react";
import axios from "axios";

function PlaceCardItem({ place }) {
  const [placeImage, setPlaceImage] = useState("/placeholder.jpg"); // Default image

  useEffect(() => {
    if (place?.PlaceName || place?.placeName) {
      fetchPlaceImage();
    }
  }, [place?.PlaceName, place?.placeName]);

  const fetchPlaceImage = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query: place.PlaceName || place.placeName },
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
          },
        }
      );
      const photoUrl = response?.data?.results[0]?.urls?.regular;
      if (photoUrl) {
        setPlaceImage(photoUrl);
      }
    } catch (error) {
      console.error(`Error fetching image for ${place.PlaceName}:`, error);
    }
  };

  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        place.PlaceName || place.placeName
      )}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="border rounded-xl p-3 mt-1 flex gap-5 hover:scale-105 hover:shadow-md transition-all cursor-pointer">
        <img
          src={placeImage}
          alt={place.PlaceName || place.placeName}
          className="w-[130px] h-[130px] rounded-xl object-cover"
        />
        <div>
          <h2 className="font-bold text-lg">{place.PlaceName || place.placeName}</h2>
          <p className="text-sm text-gray-500">{place.PlaceDetails || place.placeDetails}</p>
          <h2 className="font-medium text-sm mt-2">
            💰 {place.TicketPricing || place.ticketPricing}
          </h2>
          <h2 className="font-medium text-sm mt-2">
            ⏱️ {place.BestTimeToVisit || place.bestTimeToVisit || place.bestTimetoVisit}
          </h2>
        </div>
      </div>
    </a>
  );
}

export default PlaceCardItem;