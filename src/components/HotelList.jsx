import React from "react";

function HotelList({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip.tripData?.hotels?.map((hotel) => (
            <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              hotel.HotelName + ", " + hotel.HotelAddress
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
          <div
            key={hotel.HotelId}
            className="bg-white shadow-md rounded-xl p-1 flex flex-col hover:scale-105 transition-all cursor-pointer"
          >
            <img
              src="/placeholder.jpg"
              alt={hotel.name}
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
