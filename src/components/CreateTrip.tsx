import { Button } from "@/components/ui/button";

const CreateTrip = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 sm:px-16">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Plan Your Next Adventure
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Leverage our comprehensive travel planning tools href seamlessly
            coordinate logistics, share itineraries, and ensure a smooth journey
            with your new travel companions.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
          <Button>Explore Trips</Button>
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 flex-1"
          >
            Create Trip
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreateTrip;
