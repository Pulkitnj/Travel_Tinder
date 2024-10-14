import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const CreateTrip = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full py-16 md:py-28 lg:py-36 sm:px-16 bg-white text-black border-t"
    >
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Plan Your Next Adventure
          </h2>
          <p className="max-w-[600px] text-lg text-gray-700 leading-relaxed">
            Use our travel planning tools to coordinate logistics, share itineraries, and ensure a seamless journey with your travel companions.
          </p>
          <p className="max-w-[600px] text-lg text-gray-700 leading-relaxed">
            Discover popular destinations, budget-friendly routes, and hidden gems that make each trip unique.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col gap-3 min-[400px]:flex-row lg:justify-end"
        >
          <Button className="flex-1 border border-black bg-black text-white">
            Explore Trips
          </Button>
          <Link
            to="/Add-Trip"
            className="flex-1 inline-flex h-10 items-center justify-center rounded-md border border-gray-400 px-8 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-black"
          >
            Create Trip
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CreateTrip;