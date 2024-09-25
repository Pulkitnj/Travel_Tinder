import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import JoinUs from "./components/JoinUs";
import CreateTrip from "./components/CreateTrip";
import AddPlace from "./components/AddPlace";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <JoinUs />
        <CreateTrip />
        <AddPlace />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}