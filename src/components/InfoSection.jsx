import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosSend } from "react-icons/io";
import axios from "axios";

function InfoSection({ trip }) {
  const [imageUrl, setImageUrl] = useState("/placeholder.jpg");

  useEffect(() => {
    trip && fetchUnsplashPhoto();
  }, [trip]);

  const fetchUnsplashPhoto = async () => {
    try {
      const location = trip?.userSelection?.location?.label;
      if (!location) return;

      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query: location, per_page: 1 },
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
          },
        }
      );

      const photo = response?.data?.results[0]?.urls?.regular;
      if (photo) {
        setImageUrl(photo);
      }
    } catch (error) {
      console.error("Error fetching image from Unsplash:", error);
    }
  };

  return (
    <div>
      <img
        src={imageUrl}
        alt="trip"
        className="h-[340px] w-full object-cover rounded-xl"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-600 text-xs lg:text-sm">
              📅 Day: {trip?.userSelection?.days}
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-600 text-xs lg:text-sm">
              🤑 Budget: {trip?.userSelection?.budget}
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-600 text-xs lg:text-sm">
              🥂 Traveler: {trip?.userSelection?.traveler}
            </h2>
          </div>
        </div>
        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
}

export default InfoSection;