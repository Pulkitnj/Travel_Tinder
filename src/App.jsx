import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import JoinUs from "@/components/JoinUs";
import AddPlace from "@/components/AddPlace";
import SwipeSection from "@/components/SwipeSection";
import { DiscoverPage } from "./components/DiscoverPage";
import CreateTrip from '@/components/CreateTrip';


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/JoinUs" element={<JoinUs />} />
            <Route path="/Discover" element={<DiscoverPage />} />
            <Route path="/Create" element={<CreateTrip />} />
            <Route path="/Add-Trip" element={<AddPlace />} />
            <Route path="/About" element={<FeaturesSection />} />
            <Route path="/Connect" element={<SwipeSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}