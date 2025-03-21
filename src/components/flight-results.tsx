import { Clock, Luggage, Plane } from "lucide-react"


import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FlightResults() {
  const flights = [
    {
      id: 1,
      airline: "SkyWings",
      logo: "/placeholder.svg?height=40&width=40",
      departureTime: "08:45",
      departureAirport: "JFK",
      arrivalTime: "11:30",
      arrivalAirport: "LAX",
      duration: "5h 45m",
      stops: 0,
      price: 349,
      bestValue: true,
    },
    {
      id: 2,
      airline: "AirGlobal",
      logo: "/placeholder.svg?height=40&width=40",
      departureTime: "10:15",
      departureAirport: "JFK",
      arrivalTime: "13:45",
      arrivalAirport: "LAX",
      duration: "6h 30m",
      stops: 1,
      stopAirport: "DFW",
      price: 289,
      bestValue: false,
    },
    {
      id: 3,
      airline: "TransAtlantic",
      logo: "/placeholder.svg?height=40&width=40",
      departureTime: "14:30",
      departureAirport: "JFK",
      arrivalTime: "17:15",
      arrivalAirport: "LAX",
      duration: "5h 45m",
      stops: 0,
      price: 399,
      bestValue: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-medium">New York (JFK) to Los Angeles (LAX)</h3>
          <p className="text-sm text-muted-foreground">March 15, 2025 · 1 Adult · Economy</p>
        </div>
        <Tabs defaultValue="best">
          <TabsList>
            <TabsTrigger value="best">Best</TabsTrigger>
            <TabsTrigger value="cheapest">Cheapest</TabsTrigger>
            <TabsTrigger value="fastest">Fastest</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-4">
        {flights.map((flight) => (
          <Card key={flight.id} className={flight.bestValue ? "border-primary" : ""}>
            {flight.bestValue && (
              <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-b-md">
                Best Value
              </div>
            )}
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={flight.logo || "/placeholder.svg"}
                    alt={flight.airline}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">{flight.airline}</div>
                    <div className="text-sm text-muted-foreground">Flight {1000 + flight.id}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
                  <div className="text-center">
                    <div className="text-xl font-bold">{flight.departureTime}</div>
                    <div className="text-sm font-medium">{flight.departureAirport}</div>
                  </div>

                  <div className="flex flex-col items-center mx-4 w-full sm:w-auto">
                    <div className="text-xs text-muted-foreground mb-2">{flight.duration}</div>
                    <div className="relative w-full sm:w-32 h-[2px] bg-muted">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
                      {flight.stops > 0 && (
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-muted-foreground"></div>
                      )}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {flight.stops === 0 ? "Nonstop" : `${flight.stops} stop (${flight.stopAirport})`}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-xl font-bold">{flight.arrivalTime}</div>
                    <div className="text-sm font-medium">{flight.arrivalAirport}</div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-center">
                  <div className="text-2xl font-bold">${flight.price}</div>
                  <div className="text-sm text-muted-foreground">per person</div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  <Plane className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Boeing 737</span>
                </div>
                <div className="flex items-center">
                  <Luggage className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Carry-on included</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">On-time performance: 92%</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  Economy
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 p-6 flex flex-col sm:flex-row justify-between gap-4">
              <div className="text-sm">
                <span className="font-medium">Refundable:</span> Yes, with fee
              </div>
              <div className="flex gap-2 sm:ml-auto">
                <Button variant="outline">Flight Details</Button>
                <Button>Select</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

