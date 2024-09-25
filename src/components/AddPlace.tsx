import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const AddPlace = () => {
    return (
      <div>
        <section className="w-full py-12 bg-gray-100 md:py-24 lg:py-32 sm:px-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-4 py-1 text-sm font-semibold">
                  Add Places
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Share Your Favorite Destinations
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-lg leading-relaxed">
                  Add your favorite places to our platform and help other solo travelers discover new destinations.
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-4">
                <form className="flex flex-col gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="place-name">Place Name</Label>
                    <Input id="place-name" type="text" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="place-description">Description</Label>
                    <Textarea id="place-description" rows={3} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="place-image">Image</Label>
                    <Input id="place-image" type="file" />
                  </div>
                  <Button type="submit" className="w-full">
                    Add Place
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default AddPlace;