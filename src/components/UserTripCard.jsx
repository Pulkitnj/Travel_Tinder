import React from 'react'

function UserTripCard({trip}) {
  return (
    <div>
      <img src='/placeholder.jpg' alt={trip?.name} className='object-cover rounded-xl'/>
      <div className=''>
        <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
        <h2 className='text-sm text-gray-600'>{trip?.userSelection?.days} Days trip with {trip?.userSelection?.budget}</h2>
      </div>
    </div>
  )
}

export default UserTripCard
