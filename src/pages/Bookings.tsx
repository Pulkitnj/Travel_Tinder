import { CalendarIcon, Plane, Search, Users } from "lucide-react"
import { Link,useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"


export default function FlightBookingPage() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-6 space-y-8">
      <header className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-2">
          <Plane className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">SkyJourney</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <Link to="#" className="text-sm font-medium hover:underline">
            My Trips
          </Link>
          <Link to="#" className="text-sm font-medium hover:underline">
            Check-in
          </Link>
          <Link to="#" className="text-sm font-medium hover:underline">
            Flight Status
          </Link>
          <Button size="sm">Sign In</Button>
        </nav>
      </header>

      <main className="space-y-8">
        <section className="rounded-lg bg-muted p-6">
          <Tabs defaultValue="flights" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="flights">Flights</TabsTrigger>
              <TabsTrigger value="hotels">Hotels</TabsTrigger>
              <TabsTrigger value="cars">Cars</TabsTrigger>
            </TabsList>
            <TabsContent value="flights" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Search Flights</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <RadioGroup defaultValue="roundtrip" className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="roundtrip" id="roundtrip" />
                        <Label htmlFor="roundtrip">Round Trip</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="oneway" id="oneway" />
                        <Label htmlFor="oneway">One Way</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="multicity" id="multicity" />
                        <Label htmlFor="multicity">Multi-City</Label>
                      </div>
                    </RadioGroup>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="from">From</Label>
                        <Input id="from" placeholder="City or Airport" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="to">To</Label>
                        <Input id="to" placeholder="City or Airport" />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Departure</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className={cn("w-full justify-start text-left font-normal")}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>Pick a date</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label>Return</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className={cn("w-full justify-start text-left font-normal")}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>Pick a date</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Passengers</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start">
                              <Users className="mr-2 h-4 w-4" />
                              <span>1 Adult</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-medium">Adults</div>
                                <div className="flex items-center space-x-2">
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    -
                                  </Button>
                                  <span className="w-8 text-center">1</span>
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    +
                                  </Button>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-medium">Children (2-11)</div>
                                <div className="flex items-center space-x-2">
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    -
                                  </Button>
                                  <span className="w-8 text-center">0</span>
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    +
                                  </Button>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-medium">Infants (0-2)</div>
                                <div className="flex items-center space-x-2">
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    -
                                  </Button>
                                  <span className="w-8 text-center">0</span>
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    +
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="class">Class</Label>
                        <Select>
                          <SelectTrigger id="class">
                            <SelectValue placeholder="Economy" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="economy">Economy</SelectItem>
                            <SelectItem value="premium">Premium Economy</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="first">First Class</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg" onClick={() => navigate("/flightpage")}>
                    <Search className="mr-2 h-4 w-4" />
                    Search Flights
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="hotels">
              <Card>
                <CardHeader>
                  <CardTitle>Search Hotels</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination</Label>
                      <Input id="destination" placeholder="City, region, or specific hotel" />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Check-in</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className={cn("w-full justify-start text-left font-normal")}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>Pick a date</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label>Check-out</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className={cn("w-full justify-start text-left font-normal")}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>Pick a date</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Rooms & Guests</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start">
                              <Users className="mr-2 h-4 w-4" />
                              <span>1 Room, 2 Guests</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-80">
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-medium">Rooms</div>
                                <div className="flex items-center space-x-2">
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    -
                                  </Button>
                                  <span className="w-8 text-center">1</span>
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    +
                                  </Button>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-medium">Adults</div>
                                <div className="flex items-center space-x-2">
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    -
                                  </Button>
                                  <span className="w-8 text-center">2</span>
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    +
                                  </Button>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="text-sm font-medium">Children (0-17)</div>
                                <div className="flex items-center space-x-2">
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    -
                                  </Button>
                                  <span className="w-8 text-center">0</span>
                                  <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                                    +
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hotel-class">Hotel Class</Label>
                        <Select>
                          <SelectTrigger id="hotel-class">
                            <SelectValue placeholder="Any Rating" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any Rating</SelectItem>
                            <SelectItem value="3-plus">3+ Stars</SelectItem>
                            <SelectItem value="4-plus">4+ Stars</SelectItem>
                            <SelectItem value="5-star">5 Stars</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="special-rates" />
                        <Label htmlFor="special-rates" className="text-sm font-normal">
                          Show properties with special offers
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="free-cancel" />
                        <Label htmlFor="free-cancel" className="text-sm font-normal">
                          Free cancellation
                        </Label>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">
                    <Search className="mr-2 h-4 w-4" />
                    Search Hotels
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="cars">
              <Card>
                <CardHeader>
                  <CardTitle>Rent a Car</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="pickup-location">Pickup Location</Label>
                        <Input id="pickup-location" placeholder="City, airport, or address" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <Checkbox id="different-dropoff" />
                          <Label htmlFor="different-dropoff" className="text-sm font-normal">
                            Return to a different location
                          </Label>
                        </div>
                        <Input id="dropoff-location" placeholder="Same as pickup" disabled />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Pickup Date & Time</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className={cn("w-full justify-start text-left font-normal")}>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                <span>Pick a date</span>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" initialFocus />
                            </PopoverContent>
                          </Popover>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="10:00 AM" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="8am">8:00 AM</SelectItem>
                              <SelectItem value="9am">9:00 AM</SelectItem>
                              <SelectItem value="10am">10:00 AM</SelectItem>
                              <SelectItem value="11am">11:00 AM</SelectItem>
                              <SelectItem value="12pm">12:00 PM</SelectItem>
                              <SelectItem value="1pm">1:00 PM</SelectItem>
                              <SelectItem value="2pm">2:00 PM</SelectItem>
                              <SelectItem value="3pm">3:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Return Date & Time</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className={cn("w-full justify-start text-left font-normal")}>
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                <span>Pick a date</span>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar mode="single" initialFocus />
                            </PopoverContent>
                          </Popover>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="10:00 AM" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="8am">8:00 AM</SelectItem>
                              <SelectItem value="9am">9:00 AM</SelectItem>
                              <SelectItem value="10am">10:00 AM</SelectItem>
                              <SelectItem value="11am">11:00 AM</SelectItem>
                              <SelectItem value="12pm">12:00 PM</SelectItem>
                              <SelectItem value="1pm">1:00 PM</SelectItem>
                              <SelectItem value="2pm">2:00 PM</SelectItem>
                              <SelectItem value="3pm">3:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="car-type">Car Type</Label>
                        <Select>
                          <SelectTrigger id="car-type">
                            <SelectValue placeholder="All Car Types" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Car Types</SelectItem>
                            <SelectItem value="economy">Economy</SelectItem>
                            <SelectItem value="compact">Compact</SelectItem>
                            <SelectItem value="midsize">Midsize</SelectItem>
                            <SelectItem value="suv">SUV</SelectItem>
                            <SelectItem value="luxury">Luxury</SelectItem>
                            <SelectItem value="van">Van/Minivan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="driver-age">Driver's Age</Label>
                        <Select>
                          <SelectTrigger id="driver-age">
                            <SelectValue placeholder="25+ years" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="25-plus">25+ years</SelectItem>
                            <SelectItem value="21-24">21-24 years</SelectItem>
                            <SelectItem value="18-20">18-20 years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="include-insurance" />
                        <Label htmlFor="include-insurance" className="text-sm font-normal">
                          Include collision damage insurance
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="unlimited-miles" />
                        <Label htmlFor="unlimited-miles" className="text-sm font-normal">
                          Unlimited mileage
                        </Label>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">
                    <Search className="mr-2 h-4 w-4" />
                    Search Cars
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

      </main>   
    </div>
  )
}
