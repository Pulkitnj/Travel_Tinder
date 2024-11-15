import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function Plan() {
  return (
    <div className="flex flex-col items-center mx-10 sm:mx-20 lg:mx-56 gap-10">

      <h1 className="font-extrabold text-[36px] md:text-[48px] text-center mt-16 leading-tight">
        <span className="text-[#f97316]">Plan Your Perfect Journey: </span> 
        AI-Powered Custom Itineraries
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl">
        Let us create the ultimate travel experience for you. Tailored itineraries, budget-conscious plans, and unforgettable adventures await. All powered by AI, just for you!
      </p>
      
      <Link to="/Create">
        <Button className="text-lg bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white hover:from-orange-500 hover:to-pink-600 transition duration-200">
          Start Planning Now
        </Button>
      </Link>
    </div>
  );
}

export default Plan;