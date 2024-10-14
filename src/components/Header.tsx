import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-muted/40">
      <Link to="/" className="flex items-center justify-center gap-2">
        <img
          src="/logo.png"
          alt="Travel Tinder Logo"
          className="h-10"
        />
        <span className="text-xl font-semibold text-gray-800">Travel Tinder</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {["JoinUs", "Discover", "Create", "Plan", "Connect", "About"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {item}
          </Link>
        ))}
      </nav>
      <div className="ml-6">
        <Button variant="ghost" size="icon" className="rounded-full">
          <img
            src="/home.jpg"
            width="32"
            height="32"
            className="rounded-full"
            alt="Avatar"
            style={{ aspectRatio: "32/32", objectFit: "cover" }}
          />
          <span className="sr-only">User Menu</span>
        </Button>
      </div>
    </header>
  );
}