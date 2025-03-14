import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { googleLogout } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const LogOut = () => {
    googleLogout();
    localStorage.clear();
    window.location.reload();
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
      });
  };

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
        {["JoinUs", "Discover", "Create", "Plan", "Share", "Connect", "About"].map(
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
        {user && user.name ? (
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="px-2 py-1 text-sm shadow-sm bg-gray-100 text-black hover:bg-gray-700 hover:text-white rounded-md transition-colors"
              onClick={() => navigate("/my-trips")}
            >
              My Trips
            </Button>
            <Popover>
              <PopoverTrigger>
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
              </PopoverTrigger>
              <PopoverContent>
                <h2 className="cursor-pointer" onClick={() => LogOut()}>
                  Log Out
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="rounded-md bg-gray-900 text-gray-100"
            onClick={() => setOpenDialog(true)}
          >
            Sign In
          </Button>
        )}
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
              <Button
                className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-900 transition text-gray-100 font-semibold py-2 px-4 rounded-md shadow-sm w-full"
                onClick={handleGoogleSignIn}
              >
                <FaGoogle />
                <span>Sign in with Google</span>
              </Button>
              <span className="text-gray-500 mt-2 block">
                Use your Google account to continue
              </span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

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
