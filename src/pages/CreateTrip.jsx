import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelersList,
} from "../components/constants/options";
import { chatSession } from "@/service/AIModal";
import { db } from "@/service/firebaseConfig";
import { ChatSession } from "@google/generative-ai";
import { doc, setDoc } from "firebase/firestore";
import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaGoogle } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Save } from "lucide-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    startlocation: null,
    location: null,
    days: "",
    budget: null,
    traveler: null,
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      toast("Please login to generate trip");
      setOpenDialog(true);
      return;
    }
    if (
      !formData.startlocation ||
      !formData.location ||
      !formData.days ||
      !formData.budget ||
      !formData.traveler
    ) {
      toast("Please fill all the fields");
      return;
    }
    else if (formData.days > 5) {
      toast("Please fill days less than 5");
      return;
    }
    else{
      setLoading(true);
      const FINAL_PROMPT = AI_PROMPT.replace(
        "{location}",
        formData?.location?.label
      )
        .replace("{totalDays}", formData?.days)
        .replace("{traveler}", formData?.traveler)
        .replace("{budget}", formData?.budget);
  
      const result = await chatSession.sendMessage(FINAL_PROMPT);
  
      console.log(result?.response?.text());
      setLoading(false);
      SaveTrip(result?.response?.text());
    }
  };

  const SaveTrip = async (TripData) => {
    // Save the trip to the database]import { doc, setDoc } from "firebase/firestore";
    // Add a new document in collection "cities"
    setLoading(true);
    const user = await JSON.parse(localStorage.getItem("user"));


    if (user) {
      const docId = Date.now().toString();
      await setDoc(doc(db, "Trips", docId), {
        userSelection: formData,
        tripData: JSON.parse(TripData),
        userEmail: user?.email,
        id: docId,
      });
      setLoading(false);
      navigate(`/view-trip/${docId}`);
    }
  };

  const handleGoogleSignIn = useGoogleLogin({
    onSuccess: (codeResp) => {
      getUsersProfile(codeResp);
    },
    onError: (error) => console.log("Sign-In Error:", error),
  });

  const getUsersProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        setOpenDialog(false);
        handleGenerateTrip();
      });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences ✈️🏕️🏝️🏔️
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-9">
      <div>
          <h2 className="text-xl my-3 font-medium">Where do you want to go from?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("startlocation", v);
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">Where do you want to go?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">How many days?</h2>
          <Input
            type="number"
            placeholder="ex-3"
            className="border-2 border-gray-300 rounded-md p-2 w-full"
            required
            onChange={(e) => handleInputChange("days", e.target.value)}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">What's your budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
                  ${formData?.budget === item.title && "shadow-lg border-black"}
                  `}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="fonr-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            Who do you want on travelling with your next adventure?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelersList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("traveler", item.people)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg
                  ${
                    formData?.traveler === item.people &&
                    "shadow-lg border-black"
                  }
                  `}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="fonr-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 justify-center flex">
        <Button disabled={loading} onClick={handleGenerateTrip}>
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="p-6 rounded-lg shadow-lg bg-white">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center mb-2">
              Log In
            </DialogTitle>
            <DialogDescription className="text-center">
              <span className="flex items-center justify-center gap-2 mb-4">
                <img src="/logo.png" alt="Logo" className="h-9" />
                <span className="text-lg font-semibold text-gray-800">
                  Travel Tinder
                </span>
              </span>
              <button
                className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-900 transition text-gray-100 font-semibold py-2 px-4 rounded-md shadow-sm w-full"
                onClick={handleGoogleSignIn}
              >
                <FaGoogle />
                <span>Sign in with Google</span>
              </button>
              <span className="text-gray-500 mt-2 block">
                Use your Google account to continue
              </span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
