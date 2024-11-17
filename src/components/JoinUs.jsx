import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useState } from "react";
import { db } from "@/service/firebaseConfig"; // Import your Firebase configuration
import { collection, addDoc } from "firebase/firestore"; // Firestore functions

const JoinUs = () => {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatusMessage("Please enter a valid email.");
      return;
    }

    try {
      // Add the email to Firestore
      await addDoc(collection(db, "Subscribers"), { email, timestamp: new Date() });
      setStatusMessage("Thank you for joining! You're now part of our community.");
      setEmail(""); // Clear input field
    } catch (error) {
      console.error("Error adding subscriber:", error);
      setStatusMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full py-16 md:py-28 lg:py-36 border-t bg-white text-black"
    >
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 text-center md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Join Our Community of Adventurers
          </h2>
          <p className="mx-auto max-w-[600px] text-lg leading-relaxed text-gray-800">
            Connect with solo travelers, share experiences, and inspire new journeys.
          </p>
        </motion.div>

        {/* Sign-up Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto w-full max-w-md space-y-4"
        >
          <form onSubmit={handleFormSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-gray-300 focus:ring-black"
            />
            <Button type="submit" className="shrink-0 border-black bg-black text-white">
              Join Now
            </Button>
          </form>
          {statusMessage && (
            <p className="mt-2 text-sm text-gray-600">{statusMessage}</p>
          )}
          <p className="text-xs text-gray-600">
            Sign up to get started. By joining, you agree to our{" "}
            <a href="#" className="underline underline-offset-2">
              Terms &amp; Conditions
            </a>
          </p>
        </motion.div>

        {/* New Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 text-gray-800"
        >
          {[
            { title: "Explore Together", description: "Plan journeys with fellow travelers." },
            { title: "Global Community", description: "Connect across continents." },
            { title: "Share Your Story", description: "Inspire others with your experiences." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg border border-gray-200 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default JoinUs;