export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 w-full px-6 bg-gray-50 border-t border-gray-200">
      {/* Creator Info */}
      <div className="text-center sm:text-left">
        <h2 className="text-lg font-bold text-gray-700">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Created by a MITian
          </span>
        </h2>
        <p className="text-sm text-gray-500">&copy; 2025 Solo Traveler. All rights reserved.</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6">
        {["Terms of Service", "Privacy", "Contact"].map((item) => (
          <a
            key={item}
            href="/t&c"
            className="text-sm text-gray-600 hover:text-gray-800 hover:underline underline-offset-4 transition duration-200"
          >
            {item}
          </a>
        ))}
      </nav>
    </footer>
  );
}