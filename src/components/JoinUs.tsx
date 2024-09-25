import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const JoinUs = () => {
    return (
      <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Join Our Community of Adventurers
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground text-lg leading-relaxed">
              Connect with like-minded solo travelers, share your experiences, and inspire others to embark on their
              own journeys.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-4">
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit" className="shrink-0">
                Join Now
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              Sign up to get started. By joining, you agree to our{" "}
              <a href="#" className="underline underline-offset-2">
                Terms &amp; Conditions
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default JoinUs;