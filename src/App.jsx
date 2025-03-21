import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import JoinUs from "./pages/JoinUs";
import AddPlace from "@/components/AddPlace";
import SwipeSection from "./pages/SwipeSection";
import { DiscoverPage } from "./pages/DiscoverPage";
import CreateTrip from './pages/CreateTrip';
import ViewTrip from "./components/ViewTrip";
import FlightBookingPage from "./pages/Bookings";
import FlightPage from "./pages/FlightPage";
import Plan from "./pages/Plan";
import MyTrips from "./components/MyTrips";
import TermsAndConditions from "./pages/TermsAndConditions";
import {About} from "./pages/AboutUs";


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
            <Route path="/share" element={<AddPlace />} />
            <Route path="/About" element={<About />} />
            <Route path="/Connect" element={<SwipeSection />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/my-trips" element={<MyTrips />} />
            <Route path="/t&c" element={<TermsAndConditions />} />
            <Route path='/booking' element={<FlightBookingPage />}/>
            <Route path='/flightpage' element={<FlightPage />}/>
            <Route path="/view-trip/:tripId" element={<ViewTrip />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}