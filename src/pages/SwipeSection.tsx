import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, X, Plane, Users, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useSwipeable } from 'react-swipeable';

interface Destination {
  id: number
  name: string
  image: string
  description: string
  peopleCount: number
  availableDates: string
  tripDuration: string
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Ranthambore, Rajasthan',
    image: 'https://images.pexels.com/photos/16007596/pexels-photo-16007596/free-photo-of-temple-ruins-ranthambore-fort-ranthambore-national-park-rajasthan-india.jpeg?auto=compress&cs=tinysrgb&w=1200?height=400&width=300',
    description: 'A renowned wildlife sanctuary, famous for its tigers, historic Ranthambore Fort, and stunning natural scenery.',
    peopleCount: 23,
    availableDates: 'Dec 2024 - Jan 2025',
    tripDuration: '3-4 days'
  },
  {
    id: 2,
    name: 'Manali, Himachal Pradesh',
    image: 'https://images.pexels.com/photos/2450296/pexels-photo-2450296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?height=400&width=300',
    description: 'A beautiful hill station, offering snow-capped mountains, scenic valleys, and adventure activities like trekking and skiing.',
    peopleCount: 18,
    availableDates: 'Nov 2024 - Feb 2025',
    tripDuration: '5-6 days'
  },
  {
    id: 3,
    name: 'Kheerganga Trek, Himachal Pradesh',
    image: 'https://images.pexels.com/photos/2609459/pexels-photo-2609459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?height=400&width=300',
    description: 'A picturesque trek in the Parvati Valley, known for its natural hot springs, breathtaking views, and peaceful surroundings.',
    peopleCount: 15,
    availableDates: 'Apr 2025 - May 2025',
    tripDuration: '2-3 days'
  },
  {
    id: 4,
    name: 'Leh Ladakh',
    image: 'https://images.pexels.com/photos/3392154/pexels-photo-3392154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?height=400&width=300',
    description: 'A high-altitude desert region known for its rugged terrain, Buddhist monasteries, and the stunning Pangong Lake.',
    peopleCount: 10,
    availableDates: 'Jun 2025 - Sep 2025',
    tripDuration: '7-8 days'
  },
  {
    id: 5,
    name: 'Jammu & Kashmir',
    image: 'https://images.pexels.com/photos/27496409/pexels-photo-27496409/free-photo-of-gulmarg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?height=400&width=300',
    description: 'Often called "Paradise on Earth," it is famous for its beautiful valleys, houseboats, and the snow-covered slopes of Gulmarg.',
    peopleCount: 25,
    availableDates: 'Dec 2024 - Feb 2025',
    tripDuration: '4-5 days'
  }
]

export default function SwipeSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [likedDestinations, setLikedDestinations] = useState<Destination[]>([])

  const currentDestination = destinations[currentIndex]

  const handleLike = () => {
    if (!likedDestinations.some((destination) => destination.id === currentDestination.id)) {
      setLikedDestinations([...likedDestinations, currentDestination])
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length)
  }

  const handleDislike = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleDislike(),
    onSwipedRight: () => handleLike(),
    preventScrollOnSwipe: true,
    trackMouse: true, // Allows swiping with mouse
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8 text-primary">TravelSwipe</h1>
      <AnimatePresence mode="wait">
        <motion.div
          {...swipeHandlers}
          key={currentDestination.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="w-80 shadow-lg">
            <CardContent className="p-0">
              <img
                src={currentDestination.image}
                alt={currentDestination.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{currentDestination.name}</h2>
                <p className="text-gray-600 text-sm">{currentDestination.description}</p>
                <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
                  <div className="flex items-center space-x-1">
                    <Users className="h-5 w-5" />
                    <span>{currentDestination.peopleCount} people interested</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-5 w-5" />
                    <span>{currentDestination.tripDuration}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-2">Best Dates: {currentDestination.availableDates}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
      {/* Buttons for Like and Dislike */}
      <div className="flex justify-center mt-8 space-x-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white text-red-500 hover:bg-red-50"
          onClick={handleDislike}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Dislike</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white text-green-500 hover:bg-green-50"
          onClick={handleLike}
        >
          <Heart className="h-6 w-6" />
          <span className="sr-only">Like</span>
        </Button>
      </div>
      {/* Liked Destinations Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Liked Destinations</h2>
        {likedDestinations.length > 0 ? (
          <ul className="space-y-2">
            {likedDestinations.map((destination) => (
              <li key={destination.id} className="flex items-center space-x-2">
                <Plane className="h-5 w-5 text-primary" />
                <span>{destination.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No liked destinations yet.</p>
        )}
      </div>
    </div>
  );
};

