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
      <section className="w-full  py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Intelligent Matchmaking</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find Your Perfect Travel Companion</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Our advanced algorithms analyze your interests, travel preferences, and compatibility to connect you
                with like-minded solo travelers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src="/partner.jpg"
              width="550"
              height="310"
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <ul className="grid gap-6">
              {features.map(({ title, description }) => (
                <li key={title}>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }