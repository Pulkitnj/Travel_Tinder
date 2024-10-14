import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      title: "Personalized Matches",
      description:
        "Our AI-powered algorithms analyze your profile and recommend compatible travel companions.",
    },
    {
      title: "Secure Connections",
      description:
        "Chat, plan, and coordinate with your matches in a safe and trusted environment.",
    },
    {
      title: "Enriching Experiences",
      description:
        "Embark on unforgettable adventures and create lasting memories with your new travel companions.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-100 to-gray-200 border-t">
      <div className="container mx-auto px-4 md:px-8 space-y-20">
        
        {/* About Us Section */}
        <motion.div
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl">
            About Us
          </h2>
          <p className="max-w-2xl text-gray-600 md:text-lg">
            At Solo Traveler, we are passionate about connecting adventurous individuals who want to explore the world with like-minded companions. Our platform leverages advanced algorithms and secure features to help you find your perfect travel partner and make the journey unforgettable.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="flex flex-col items-center text-center space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block rounded-full bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-700"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Intelligent Matchmaking
          </motion.div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
            Find Your Perfect Travel Companion
          </h2>
          <p className="max-w-2xl text-gray-600 md:text-lg">
            Our advanced algorithms analyze your interests, travel preferences, and compatibility to connect you with like-minded solo travelers.
          </p>
        </motion.div>

        {/* Features List */}
        <div className="mx-auto grid max-w-5xl items-center gap-10 py-12 lg:grid-cols-2 lg:gap-12">
          <motion.img
            src="/partner.jpg"
            alt="Travel Companions"
            className="mx-auto aspect-video rounded-xl shadow-lg object-cover sm:w-full lg:order-last"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <ul className="grid gap-8">
            {features.map(({ title, description }) => (
              <motion.li
                key={title}
                className="space-y-3 p-4 rounded-lg bg-white shadow-md transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="grid gap-2">
                  <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}