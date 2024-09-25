import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-muted/40">
      <a href="#" className="flex items-center justify-center">
        <PlaneIcon className="h-6 w-6" />
        <span className="sr-only">Solo Traveler</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {["Discover", "Plan", "Connect", "About"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {item}
          </a>
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

function PlaneIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    )
  }