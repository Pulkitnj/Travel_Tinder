import React from 'react'
import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";


function InfoSection({trip}) {
  return (
    <div>
      <img src="/paris.jpg" alt="trip" className='h-[340px] w-full object-cover rounded-xl'/>
      <div className='flex justify-between items-center'>
        <div className='my-5 flex flex-col gap-2'>
          <h2 className='font-bold text-2xl'>
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-600 text-xs lg:text-sm">📅 Day: {trip?.userSelection?.days}</h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-600 text-xs lg:text-sm">🤑 Budget: {trip?.userSelection?.budget}</h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-600 text-xs lg:text-sm">🥂 Traveler: {trip?.userSelection?.traveler}</h2>
          </div>
        </div>
        <Button ><IoIosSend/></Button>
      </div>
    </div>
  )
}

export default InfoSection
