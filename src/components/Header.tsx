import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-muted/40">
      {/* Logo and Title */}
      <Link to="/" className="flex items-center justify-center gap-2">
        <img
          src="/logo.png"
          alt="Travel Tinder Logo"
          className="h-6 sm:h-8 md:h-5"
        />
        <span className="text-base font-semibold text-gray-800 sm:text-lg md:text-md">
          Travel Tinder
        </span>
      </Link>

      {/* Navigation for larger screens */}
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        {["JoinUs", "Discover", "Create", "Plan", "Connect", "About"].map(
          (item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              {item}
            </Link>
          )
        )}
      </nav>

      {/* User Avatar */}
      <div className="ml-auto md:ml-6">
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

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden ml-4 flex flex-col items-center justify-center gap-1 p-2 rounded-md border border-gray-300 hover:bg-gray-200"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="sr-only">Open Menu</span>
        <div className="w-5 h-0.5 bg-gray-700"></div>
        <div className="w-5 h-0.5 bg-gray-700"></div>
        <div className="w-5 h-0.5 bg-gray-700"></div>
      </Button>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-2 py-4">
            {["JoinUs", "Discover", "Create", "Plan", "Connect", "About"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}