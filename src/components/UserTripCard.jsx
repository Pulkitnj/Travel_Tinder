import React from 'react';

function UserTripCard({ trip, onClick }) {
  return (
    <div 
      className="cursor-pointer p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300" 
      onClick={onClick}
    >
      <img
        src={trip?.userSelection?.image || '/placeholder.jpg'}
        alt={trip?.userSelection?.location?.label || 'Trip'}
        className="object-cover rounded-xl w-full h-40"
      />
      <div className="mt-2">
        <h2 className="font-bold text-lg">{trip?.userSelection?.location?.label || 'Unknown Location'}</h2>
        <h2 className="text-sm text-gray-600">
          {trip?.userSelection?.days || 'N/A'} Days trip with {trip?.userSelection?.budget || 'N/A'} Budget
        </h2>
      </div>
    </div>
  );
}

export default UserTripCard;