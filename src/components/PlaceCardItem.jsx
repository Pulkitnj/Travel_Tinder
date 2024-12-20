import React from 'react'

function PlaceCardItem({place}) {
  return (
    <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              place.PlaceName)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
        <div className='border rounded-xl p-3 mt-1 flex gap-5 hover:scale-105 hover:shadow-md transition-all cursor-pointer'>
        <img src='/placeholder.jpg' alt='place' className='w-[130px] h-[130px] rounded-xl'/>
        <div>
            <h2 className='font-bold text-lg'>{place.PlaceName||place.placeName}</h2>
            <p className='text-sm text-gray-500'>{place.PlaceDetails||place.placeDetails}</p>
            <h2 className='font-medium text-sm mt-2'>💰 {place.TicketPricing||place.ticketPricing}</h2>
            <h2 className='font-medium text-sm mt-2'>⏱️ {place.BestTimeToVisit||place.bestTimeToVisit||place.bestTimetoVisit}</h2>
        </div>
        </div>
    </a>
  )
}

export default PlaceCardItem
