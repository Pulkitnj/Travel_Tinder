export const SelectTravelersList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A solo traveler exploring",
    icon: "👤",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "👥",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of adventure seekers",
    icon: "👨‍👩‍👧",
    people: "3 to 5 People",
  },
];

export const SelectBudgetOptions = [
  { id: 1, title: "Cheap", desc: "Stay conscious of costs", icon: "💲" },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep costs on the average side",
    icon: "💵",
  },
  { id: 3, title: "Luxury", desc: "Don’t worry about costs", icon: "💎" },
];

export const AI_PROMPT = "Generate a detailed travel plan for the location: {location}, covering {totalDays} days for {traveler} travelers with a budget of {budget}. Provide a list of hotel options with the following details: HotelId, HotelName, HotelAddress, Price, Hotel Image URL, Geo Coordinates, Rating, and Description. Additionally, suggest a day-wise itinerary for {totalDays} days, including: PlaceName, Place Details, Place Image URL, Geo Coordinates, Ticket Pricing, and estimated TravelTime to each location. Include the besttimetovisit each place and format the entire response in JSON.";
