import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const AddPlace = () => {
  return (
    <div>
      <section className="w-full py-4 bg-gray-50 md:py-4 lg:py-8 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl space-y-10">
          <motion.div
            className="flex flex-col items-center text-center space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div
                className="inline-block rounded-full bg-gray-200 px-4 py-1 text-sm font-semibold text-gray-700"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Add Places
              </motion.div>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl">
                Share Your Favorite Destinations
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
                Add your favorite places to our platform and help other solo travelers discover new destinations.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto w-full max-w-md space-y-4 p-6 rounded-lg shadow-lg bg-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <form className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="place-name">Place Name</Label>
                <Input id="place-name" type="text" placeholder="Enter the place name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="place-description">Description</Label>
                <Textarea
                  id="place-description"
                  rows={4}
                  placeholder="Describe what makes this place special"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="place-image">Upload Image</Label>
                <Input id="place-image" type="file" className="file-input" />
              </div>
              <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold">
                Add Place
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AddPlace;