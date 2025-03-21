import { CalendarIcon, Plane, Search, Users } from "lucide-react"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { FlightResults } from "../components/flight-results"

export default function FlightBookingPage() {
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
                  <Button className="w-full" size="lg">
                    <Search className="mr-2 h-4 w-4" />
                    Search Flights
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="hotels">
              <Card>
                <CardHeader>
                  <CardTitle>Hotel Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Hotel booking functionality coming soon.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cars">
              <Card>
                <CardHeader>
                  <CardTitle>Car Rental</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Car rental functionality coming soon.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

      </main>
    </div>
  )
}
