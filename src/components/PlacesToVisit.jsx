import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({trip}) {
  return (
    <div>
      <h2 className='text-lg font-bold mt-10'>Places to Visit</h2>

      <div>  
        {trip?.tripData?.itinerary?.days?.map((item,index)=>(
          <div key={item.day || index} className='mt-3'>
            <h2 className='font-bold text-lg mt-2'>Day {item.day}</h2>
            <div className='grid md:grid-cols-2 gap-3'>
                {item.plan.map((place,index)=>(
                    <div className='my-2'>
                        <h2 className='font-medium text-sm text-orange-800'>{place.TravelTime||place.travelTime}</h2>
                            <PlaceCardItem place={place}/>
                    </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesToVisit
