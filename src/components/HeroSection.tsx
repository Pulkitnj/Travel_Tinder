import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 sm:px-16">
      <div className="container px-4 md:px-6">
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
              <Button className="flex-[2] h-10">Join Now</Button>
              <a
                href="#"
                className="flex-1 inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
              >
                Learn More
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
      </div>
    </section>
  );
}
