import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/Create");
  };
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-20 sm:px-16">
      <div className="container px-4 md:px-6">
        {/* Hero Section */}
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Discover the World, Together
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Connect with like-minded solo travelers, plan unforgettable
              adventures, and create lasting memories.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="flex-[2] h-10" onClick={handleNavigation}>
                Join Now
              </Button>
              <a
                href="/Connect"
                className="flex-1 inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
              >
                Swipe
              </a>
            </div>
          </div>
          <img
            src="/home.jpg"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>

        {/* Top Destinations Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center sm:text-3xl mb-6">
            Explore Top Destinations
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {["Paris", "Tokyo", "New York", "Sydney"].map((destination) => (
              <div
                key={destination}
                className="rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-all cursor-pointer"
              >
                <img
                  src={`/${destination.toLowerCase()}.jpg`}
                  alt={destination}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{destination}</h3>
                  <p className="text-sm text-muted-foreground">
                    A must-visit city with endless attractions.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl mb-6">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                step: "Join Our Community",
                description: "Sign up and meet like-minded travelers.",
                link: "/JoinUs",
              },
              {
                step: "Plan Your Adventure",
                description: "Browse destinations and create trip plans.",
                link: "/plan",
              },
              {
                step: "Start Your Journey",
                description: "Embark on unforgettable experiences together.",
                link: "/Connect",
              },
            ].map((item) => (
              <div key={item.step} className="p-6 border rounded-xl shadow-sm hover:bg-gray-800 hover:text-white">
                <a href={item.link} className="block ">
                  <h3 className="text-lg font-semibold">{item.step}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {item.description}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl mb-6">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Amit",
                feedback:
                  "This platform is amazing! I found great travel buddies for my trip.",
              },
              {
                name: "Priya",
                feedback: "Planning a trip has never been this easy and fun. I love it!",
              },
              {
                name: "Ravi",
                feedback:
                  "I highly recommend this platform to all solo travelers!",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 bg-muted rounded-xl shadow-lg"
              >
                <p className="text-sm text-muted-foreground">
                  "{testimonial.feedback}"
                </p>
                <h4 className="text-lg font-semibold mt-4">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
