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

export const AI_PROMPT = `
Generate a detailed travel plan for the location: {location}, covering {totalDays} days for {traveler} travelers with a budget of {budget}.
Provide the response in JSON format with the following structure:

{
  "hotels": [
    {
      "HotelId": "string",
      "HotelName": "string",
      "HotelAddress": "string",
      "Price": "string",
      "HotelImageURL": "string",
      "GeoCoordinates": {
        "lat": "number",
        "lng": "number"
      },
      "Rating": "number",
      "Description": "string"
    }
  ],
  "itinerary": {
    "days": [
      {
        "day": "number",
        "plan": [
          {
            "PlaceName": "string",
            "PlaceDetails": "string",
            "PlaceImageURL": "string",
            "GeoCoordinates": {
              "lat": "number",
              "lng": "number"
            },
            "TicketPricing": "string",
            "TravelTime": "string",
            "bestTimeToVisit": "string"
          }
        ]
      }
    ]
  }
}

Ensure that:
1. Each day in "days" has a unique "day" number.
2. The "plan" array under each "day" includes detailed places to visit with all specified attributes.
3. The response is properly formatted, and fields are never left undefined or empty.
`;
