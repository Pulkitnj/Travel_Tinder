import { Button } from "@/components/ui/button";

export function DiscoverPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-20 sm:px-16">
      <div className="container px-4 md:px-6">
        
        {/* Intro Section */}
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Discover Incredible India
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              From beaches to mountains and vibrant cities, explore the best of India based on your interests and travel preferences.
            </p>
            <Button className="h-10">Start Exploring</Button>
          </div>
          <img
            src="/india.jpg"
            width="550"
            height="550"
            alt="Discover India"
            loading="lazy" // Enables lazy loading
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>

        {/* Suggested Destinations by Category */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center sm:text-3xl mb-6">Places We Suggest</h2>
          <div className="space-y-12">
            {[
              { category: "Hill Stations", places: ["Manali", "Shimla", "Leh", "Udaipur"] },
              { category: "Beaches", places: ["Goa", "Andaman & Nicobar", "Gokarna", "Pondicherry"] },
              { category: "Historical Sites", places: ["Jaipur", "Agra", "Hampi", "Delhi"] },
              { category: "Spiritual Destinations", places: ["Varanasi", "Rishikesh", "Amritsar", "Bodh Gaya"] },
            ].map((category) => (
              <div key={category.category} className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {category.places.map((place) => (
                    <div 
                      key={place} 
                      className="rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
                    >
                      <img
                        src={`/${place.toLowerCase().replace(/\s+/g, '')}.jpg`}
                        alt={place}
                        loading="lazy"
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-md font-semibold text-gray-800">{place}</h4>
                        <p className="text-sm text-gray-500">Explore the beauty of {place}.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complete List of Destinations */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl mb-6">Complete List of Places</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5 text-center text-sm">
            {[
              "Manali", "Shimla", "Goa", "Jaipur", "Varanasi", 
              "Rishikesh", "Mysore", "Kodaikanal", "Udaipur", 
              "Leh", "Agra", "Bodh Gaya", "Chennai", "Jodhpur", 
              "Hampi", "Ooty", "Pondicherry", "Mumbai", 
              "Delhi", "Darjeeling"
            ].map((place) => (
              <a
                key={place}
                href={`/${place.toLowerCase()}`}
                className="block p-2 rounded-lg hover:underline text-primary-600 transition-transform transform hover:scale-105 hover:bg-primary-100"
              >
                {place}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}